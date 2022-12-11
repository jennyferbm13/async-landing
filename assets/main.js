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
