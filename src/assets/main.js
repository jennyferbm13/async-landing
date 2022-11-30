const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCY38RvRIxYODO4penyxUwTg&part=snippet%2Cid&order=date&maxResults=8";

const APIRepo =
  "https://github-non-official-apis.p.rapidapi.com/fetch?url=https%3A%2F%2Fgithub.com%2Fjennyferbm13";

const content = null || document.getElementById("content");
const contentRepo = null || document.getElementById("contentRepo");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0aee7ba50mshaf3a1450c81fb2dp17fd9ajsn6287660c2923",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const optionsRepo = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0aee7ba50mshaf3a1450c81fb2dp17fd9ajsn6287660c2923",
    "X-RapidAPI-Host": "github-non-official-apis.p.rapidapi.com",
  },
};

async function fetchData(urlAPI, options) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  console.log(data);
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
      ${videos.items
        .map(
          (video) => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `
        )
        .slice(0, 4)
        .join("")}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})(); //se ejecuta a si misma

(async () => {
  try {
    const reposi = await fetchData(APIRepo, optionsRepo);
    let view = `
      ${reposi.repos
        .map(
          (repo) => `
          <div class="bg-white">
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div class="group relative">
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href=${repo.url}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${repo.repoName}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Programming language:${repo.programmingLanguage}</p>
            <p class="text-sm font-medium text-gray-900">${repo.url}</p>
          </div>
          
        </div>
      </div>
   
  </div>
</div>
        
      `
        )
        .slice(0, 15)
        .join("")}
      `;
    contentRepo.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})(); //se ejecuta a si misma
/*
(async () => {
  try {
    const reposi = await fetchData(APIRepo, optionsRepo);
    let view = `
      ${reposi.repos
        .map(
          (repo) => `
<div>
            <a href=${repo.url}>${repo.url}</p></a>
          
          
             <p> ${repo.repoName}</p>
         
        </div>
      `
        )
        .slice(0, 15)
        .join("")}
      `;
    contentRepo.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})(); //se ejecuta a si misma
*/
/*
(async () => {
  try {
    const reposi = await fetchData(APIRepo, optionsRepo);
    let view = `
      <p>${reposi.repos[0].repoName}</p>
      `;
    contentRepo.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})(); //se ejecuta a si misma*/

/*
<div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
  <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div class="sm:min-w-0 sm:flex-1">
        <p class="text-lg font-semibold leading-8 text-gray-900">
          ${repo.repoName}
        </p>
        <p class="mt-2 text-base leading-7 text-gray-600">
          Programming languege:
        </p>
        <p class="mt-2 text-base leading-7 text-gray-600">
          ${repo.programmingLanguage}
        </p>
        <a href=${repo.url}>${repo.url}</a>
      </div>
    </div>

    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div class="sm:min-w-0 sm:flex-1">
        <p class="text-lg font-semibold leading-8 text-gray-900">
          No hidden fees
        </p>
        <p class="mt-2 text-base leading-7 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
    </div>

    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div class="sm:min-w-0 sm:flex-1">
        <p class="text-lg font-semibold leading-8 text-gray-900">
          Transfers are instant
        </p>
        <p class="mt-2 text-base leading-7 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
    </div>

    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div class="sm:min-w-0 sm:flex-1">
        <p class="text-lg font-semibold leading-8 text-gray-900">
          Mobile notifications
        </p>
        <p class="mt-2 text-base leading-7 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
    </div>
  </div>
</div>;

*/
