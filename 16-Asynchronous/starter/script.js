'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const deovb = x => {
//   console.log(x);
//   x += 1;
//   console.log('sasd');
//   console.log(x);
//   return x;
// };
// console.log(setTimeout(n => deovb(n), 2000, 5));

//xml
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v4/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag['png']}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.altSpellings[1]}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population).toFixed(
//         1,
//       )} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('syria');

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v4/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);
//     //get next country
//     console.log;
//     const neighbours = data.borders;
//     console.log(neighbours);
//     if (!neighbours || neighbours.length === 0) return;

//     for (const neighbour of neighbours) {
//       if (neighbour !== 'ISR') {
//         const neighbourRequest = new XMLHttpRequest();
//         neighbourRequest.open(
//           'GET',
//           `https://restcountries.com/v4/alpha/${neighbour}`,
//         );
//         neighbourRequest.send();
//         neighbourRequest.addEventListener('load', function () {
//           const [neighbourData] = JSON.parse(this.responseText);
//           console.log(neighbourData);
//           renderCountry(neighbourData);
//         });
//       }
//     }
//   });
// };

// const get3CountriesData = function (name) {
//   const newData = fetch(`https://restcountries.com/v4/name/${name}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`not found ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbours = data[0].borders;
//       console.log(neighbours);
//       if (!neighbours || neighbours.length === 0) return;
//       const codes = neighbours.join(',');
//       console.log(codes);
//       return fetch(`https://restcountries.com/v4/alpha?codes=${codes}`)
//         .then(res => {
//           if (!res.ok) throw new Error(`not found ${res.status}`);
//           return res.json();
//         })
//         .then(datas => {
//           console.log(datas);
//           for (const cn of datas) {
//             renderCountry(cn);
//           }
//         });
//     })
//     .catch(err => {
//       console.log(`${err} boom`);
//       renderError(`Error ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryAndNeighbour('Ghana');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag['png'] || data.flags['png']}" />
    <div class="country__data">
      <h3 class="country__name">${data.name['official']}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getJSON = function (url, erroMSG = 'somthing wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(`${erroMSG} moso ${res.status}`);
//     }
//     return res.json();
//   });
// };

const getJSON = async function (url, erroMSG = 'somthing wrong') {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${erroMSG} moso ${res.status}`);

  const data = await res.json();
  return data;
};

// const get3CountriesData = function (name) {
//   getJSON(`https://restcountries.com/v4/name/${name}`, 'not found bunk')
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbours = data[0].borders;
//       console.log(neighbours);
//       if (!neighbours || neighbours.length === 0) {
//         throw new Error('no neighbours bunk');
//       }
//       const codes = neighbours.join(',');
//       console.log(codes);
//       return getJSON(
//         `https://restcountries.com/v4/alpha?codes=${codes}`,
//         'not found also bunk ',
//       ).then(datas => {
//         console.log(datas);
//         for (const cn of datas) {
//           renderCountry(cn);
//         }
//       });
//     })
//     .catch(err => {
//       console.log(`${err} boom`);
//       renderError(`Error ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   get3CountriesData('fgd');
// });

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then(res => {
//       if (res.status === 403) {
//         throw new Error('you need to wait');
//       } else if (!res.ok) {
//         throw new Error('moso');
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.countryName}`);
//       get3CountriesData(data.countryName);
//     })
//     .catch(err => {
//       console.log(`${err} bunk`);
//     });
// };

// whereAmI(20, 50);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI();

// console.log('test start');
// setTimeout(() => {
//   (console.log('0 sec'), 0);
// });
// Promise.resolve('resolved promise 1').then(res => {
//   console.log(res);
// });
// Promise.resolve('resolved promise 12').then(res => {
//   // for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('test end');

// const varv = new Promise(function (resolve, reject) {
//   console.log('sasdas');
//   setTimeout(function () {
//     const max = Math.random();
//     console.log(max);
//     if (max >= 0.5) {
//       resolve('ssss');
//     } else {
//       reject(new Error('hhhh'));
//     }
//   }, 2000);
// });
// varv.then(res => console.log(res)).catch(err => console.log(err));

// btn.addEventListener('click', function () {
//   varv.then(res => console.log(res)).catch(err => console.log(err));
// });

// This function acts as a "factory" for new Promises
// function createPromise() {
//   return new Promise(function (resolve, reject) {
//     console.log('sasdas');
//     setTimeout(function () {
//       const max = Math.random();
//       console.log(max);
//       if (max >= 0.5) {
//         resolve('ssss');
//       } else {
//         reject(new Error('hhhh'));
//       }
//     }, 2000);
//   });
// }

// btn.addEventListener('click', function () {
//   // We call the factory here, so a NEW promise is born on every click
//   createPromise()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// });

// const wait = seconds => {
//   return new Promise(res => {
//     setTimeout(res, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('wated 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('wated 2 seconds');
//     wait(1);
//   })
//   .then(() => {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//     }
//     console.log('wated 3 seconds');
//     wait(1);
//   })
//   .then(() => {
//     console.log('wated 4 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('wated 5 seconds and done');
//     return wait(1);
//   })
//   .then(() => {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//     }
//     console.log('wated 6 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('wated 7 seconds');
//     return wait(1);
//   });

// const okl = new Promise((res, rej) => {
//   if (10 > 5) {
//     res('bah');
//   } else {
//     rej('ben');
//   }
// });

// console.log(okl.then(res => console.log('Inside then:', res)));
// console.log('Outside the chain');

// const getPosition = () => {
//   return new Promise((res, rej) => {
//     // navigator.geolocation.getCurrentPosition(
//     //   postion => res(postion),
//     //   err => ref(err),
//     // );
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// getPosition().then(pos => console.log(pos));

// btn.addEventListener('click', () => {
//   getPosition();
// });
// getPosition().then(pos => {
//   const { latitude, longitude } = pos.coords;
// });

// const whereAmI2 = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//       );
//     })

//     .then(res => {
//       if (res.status === 403) {
//         throw new Error('you need to wait');
//       } else if (!res.ok) {
//         throw new Error('moso');
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.countryName}`);
//       get3CountriesData(data.countryName);
//     })
//     .catch(err => {
//       console.log(`${err} bunk`);
//     });
// };

// btn.addEventListener('click', whereAmI2);

const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

const whereAmI3 = async () => {
  // fetch(`https://restcountries.com/v4/name/${name}`).then(res =>
  //   console.log(res),
  // );
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );
    if (!resGeo.ok) throw new Error(`yalla moso`);
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.com/v4/name/${dataGeo.countryName}`,
    );
    if (!res.ok) throw new Error(`yalla nfokho`);
    const data = await res.json();
    renderCountry(data[0]);
    return { data, dataGeo };
  } catch (err) {
    console.error(err);
    renderError(`Somthing went wrong ${err}`);
  }
};

btn.addEventListener('click', () => {
  whereAmI3();
});

// (async () => {
//   try {
//     const city = await whereAmI3();
//     console.log(city.data[0].name.official);
//   } catch (err) {
//     console.error(`${err.message}`);
//   }
// })();

const getAll3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v4/name/${c1}`);
    // console.log(data1);
    // const [data2] = await getJSON(`https://restcountries.com/v4/name/${c2}`);
    // console.log(data2);
    // const [data3] = await getJSON(`https://restcountries.com/v4/name/${c3}`);
    // console.log(data3);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v4/name/${c1}`),
      getJSON(`https://restcountries.com/v4/name/${c2}`),
      getJSON(`https://restcountries.com/v4/name/${c3}`),
    ]);
    console.log(data);
    data.map(d => renderCountry(d[0]));
  } catch (err) {
    console.error(` the error is ${err.message} with code ${err.status}`);
  }
};

// getAll3Countries('syria', 'palestine', 'Lebanon');
// btn.addEventListener(
//   'click', ()=>{
//     (async () => {
//       const pp = await Promise.race([
//         getJSON(`https://restcountries.com/v4/name/italy`),
//         getJSON(`https://restcountries.com/v4/name/egypt`),
//         getJSON(`https://restcountries.com/v4/name/mexico`),
//       ]);
//       console.log(pp[0]);
//       renderCountry(pp[0]);
//     })();
//   }
// );

const factoryCountry = async () => {
  const arr = ['syria', 'lebanon', 'palestine', 'iraq', 'italy', 'sweden'];

  for (let cn of arr) {
    const data = await getJSON(`https://restcountries.com/v4/name/${cn}`);
    renderCountry(data[0]);
  }
};

factoryCountry();

Promise.any([
  Promise.resolve('suc2 '),
  Promise.reject('fail'),
  Promise.resolve('suc 1'),
]).then(res => console.log(res));
