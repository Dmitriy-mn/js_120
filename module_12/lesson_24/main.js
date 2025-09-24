import './style.css'
import axios from 'axios'


// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending/movie/week";
const API_KEY = "345007f9ab440e5b86cef51be6397df1";


// const container = document.querySelector(".js-movie-list");
// const loadBtn = document.querySelector(".js-load-more");
// let page = 1;

// loadBtn.addEventListener("click", onLoadMore);

// async function serviceMovie(page = 1) {
//     const { data } = await axios(`${BASE_URL}${END_POINT}`, {
//         params: {
//             api_key: API_KEY,
//             page
//         }
//     });

//     return data;
// }

// serviceMovie(page)
//     .then(data => {
//         console.log(data);
//         container.insertAdjacentHTML("beforeend", createMerkup(data.results));

//         if(data.page < data.total_pages) {
//             loadBtn.classList.replace("load-more-hidden", "load-more");
//         }
//     })
//     .catch(error => {
//         alert(error.message);
//     })

// function createMerkup(arr) {
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}"/>
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release Date: ${release_date}</p>
//                 <p>Vote Average: ${vote_average}</p>
//             </div>
//         </li>
//     `).join("");
// }

// async function onLoadMore() {
//     page+=1;
//     loadBtn.disabled = true;

//     try {
//         const data = await serviceMovie(page);
//         console.log(data)

//         container.insertAdjacentHTML("beforeend", createMerkup(data.results));
        
//         if(data.page >= data.total_pages) {
//             loadBtn.classList.replace("load-more", "load-more-hidden");
//         }
//     } catch(error) {
//         alert(error.message);
//     } finally {
//         loadBtn.disabled = false;
//     }
// }



// --------------------------------------------------

const container = document.querySelector(".js-movie-list");
const guard = document.querySelector(".js-guard");
let page = 1;

const options = {
  root: null,
  rootMargin: "300px",
  threshold: 0,
};

const observer = new IntersectionObserver(handlerPagination, options);


async function serviceMovie(page = 1) {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
        params: {
            api_key: API_KEY,
            page
        }
    });

    return data;
}

function createMerkup(arr) {
    return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}"/>
            <div class="movie-info">
                <h2>${original_title}</h2>
                <p>Release Date: ${release_date}</p>
                <p>Vote Average: ${vote_average}</p>
            </div>
        </li>
    `).join("");
}

serviceMovie(page)
    .then(data => {
        console.log(data);
        container.insertAdjacentHTML("beforeend", createMerkup(data.results))

        if(data.page < data.total_pages) {
            observer.observe(guard);
        }
    })
    .catch(error => {
        alert(error.message);
    })

function handlerPagination(entries, observer) {    
    entries.forEach(async (entry) => {         
        if(entry.isIntersecting) {
            page += 1;
            
            try {
                const data = await serviceMovie(page);
                container.insertAdjacentHTML("beforeend", createMerkup(data.results));
                
                if(data.page >= data.total_pages) {
                    // observer.unobserve(guard);
                    observer.unobserve(entry.target);
                }
            } catch(error) {
                alert(error.message);
            }
        }
    })
}




