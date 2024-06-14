import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


// export const useProductsStore = create((set)=>{

//     const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
//     const options = {
// 	method: 'GET',
// 	headers: {
//         'X-RapidAPI-Key': '694c161d7fmsh37dbfcec04c91abp1119d6jsnc14ada24ede7',
// 		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
// 	}
// };
    
//     return{
//         allProducts: [],
//         gamingProducts:[],
//         electronicProducts:[],
//         healthProducts:[],
//         automotorsProducts:[],
//         homeProducts:[],
//         clothesProducts:[],
        
//         loading: true,
//         loadingGaming:true,
//         loadingElectronic:true,
//         loadingHealth:true,
//         loadingAutomotors:true,
//         loadingHome:true,
//         loadingClothes:true,
//         error: null,
        

//         fetchGamingProducts: async()=>{
//             try{
//                 const response = await fetch(`${url}&query=gaming`,options)
//                 const data = await response.json()
//                 console.log(data)
                
//                 set({gamingProducts:data.data.products, loadingGaming:false})
                
//             } catch(error){
//                 console.error(error)
//                 set({loadingGaming:false, error:"Error fetching products"})
//             }
           
//         },

//         // fetchElectronicProducts: async()=>{
//         //     try{
//         //         const response = await fetch(`${url}&query=iphone`,options)
//         //         const data = await response.json()
                
//         //         set({electronicProducts:data.data.products, loadingElectronic:false})
                
//         //     } catch(error){
//         //         console.error(error)
//         //         set({loadingElectronic:false, error:"Error fetching products"})
//         //     }
           
//         // },

//         fetchHealthProducts: async()=>{
//             try{
//                 const response = await fetch(`${url}&query=health`,options)
//                 const data = await response.json()
                
//                 set({healthProducts:data.data.products, loadingHealth:false})
                
//             } catch(error){
//                 console.error(error)
//                 set({loadingHealth:false, error:"Error fetching products"})
//             }
           
//         },

//         fetchAutomotorsProducts: async()=>{
//             try{
//                 const response = await fetch(`${url}&query=caraccesories`,options)
//                 const data = await response.json()
                
//                 set({automotorsProducts:data.data.products, loadingAutomotors:false})
                
//             } catch(error){
//                 console.error(error)
//                 set({loadingAutomotors:false, error:"Error fetching products"})
//             }
           
//         },


//         fetchHomeProducts: async()=>{
//             try{
//                 const response = await fetch(`${url}&query=hogar`,options)
//                 const data = await response.json()
                
//                 set({homeProducts:data.data.products, loadingHome:false})
                
//             } catch(error){
//                 console.error(error)
//                 set({loadingHome:false, error:"Error fetching products"})
//             }
           
//         },

//         fetchClothesProducts: async()=>{
//             try{
//                 const response = await fetch(`${url}&query=clothes`,options)
//                 const data = await response.json()
                
//                 set({clothesProducts:data.data.products, loadingClothes:false})
                
//             } catch(error){
//                 console.error(error)
//                 set({loadingClothes:false, error:"Error fetching products"})
//             }
           
//         },

//         getClickedProduct: async (id)=>{
//             try{
//                 const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}&country=US&limit=3&offset=0`, options)
//                 const data = await response.json()
//                 return data.data

//             } catch(error){
//                 console.error(error)
//                 set({loading:false, error:"Error fetching products"})
//             }
//         }



        
        



//     }
// });



// Crea tu tienda Zustand con el estado gamingProducts
const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
    const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '97103e280emshdf06b4fcbadb466p137546jsn1383f368166d',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};






export const useProductsStore = create(
    
    persist(
      (set) => ({
        
        
            allProducts: null,
            
            gamingProducts:null,
            electronicProducts:null,
            healthProducts:null,
            automotorsProducts:null,
            homeProducts:null,
            clothesProducts:null,
            
            loading: true,
            loadingGaming:true,
            loadingElectronic:true,
            loadingHealth:true,
            loadingAutomotors:true,
            loadingHome:true,
            loadingClothes:true,
            error: null,
            
            
    
            fetchGamingProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=gaming`,options)
                    const data = await response.json()
                    console.log(data)
                    
                    set({gamingProducts:data.data.products, loadingGaming:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingGaming:false, error:"Error fetching products"})
                }
               
            },
    
            fetchElectronicProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=iphone`,options)
                    const data = await response.json()
                    
                    set({electronicProducts:data.data.products, loadingElectronic:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingElectronic:false, error:"Error fetching products"})
                }
               
            },
    
            fetchHealthProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=health`,options)
                    const data = await response.json()
                    
                    set({healthProducts:data.data.products, loadingHealth:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingHealth:false, error:"Error fetching products"})
                }
               
            },
    
            fetchAutomotorsProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=caraccesories`,options)
                    const data = await response.json()
                    
                    set({automotorsProducts:data.data.products, loadingAutomotors:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingAutomotors:false, error:"Error fetching products"})
                }
               
            },
    
    
            fetchHomeProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=hogar`,options)
                    const data = await response.json()
                    
                    set({homeProducts:data.data.products, loadingHome:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingHome:false, error:"Error fetching products"})
                }
               
            },
    
            fetchClothesProducts: async()=>{
                try{
                    const response = await fetch(`${url}&query=clothes`,options)
                    const data = await response.json()
                    
                    set({clothesProducts:data.data.products, loadingClothes:false})
                    
                } catch(error){
                    console.error(error)
                    set({loadingClothes:false, error:"Error fetching products"})
                }
               
            },
    
           
    
    
    
            
            
    
    
    
        }
        
      ),
      {
        name: 'homepage-products-storage', // Nombre único para el almacenamiento
        storage: createJSONStorage(() => localStorage), // Puedes cambiar esto a otro almacenamiento
      }
    )


  );



  export const useClickedProductStore = create(
    
    persist(
      (set) => ({
        
        
            
            clickedProduct:null,
            error:null,
            
    
    
            getClickedProduct: async (id)=>{
                try{
                    const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}&country=US`, options)
                    const data = await response.json()
                    console.log(data)
                    set({clickedProduct:data.data})
    
                } catch(error){
                    console.error(error)
                    set({error:"Error fetching products"})
                }
            }
        }
        
      ),
      {
        name: 'productpage-storage', // Nombre único para el almacenamiento
        storage: createJSONStorage(() => localStorage), // Puedes cambiar esto a otro almacenamiento
      }
    )


  );

  export const useSearchProductsStore = create(
    
    persist(
      (set) => ({
    
            error:null,
            searchedProducts:null,
            
            getSearchProducts: async (query, page)=>{
                try{
                    const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=${page}&country=US`, options)
                    const data = await response.json()
                    console.log(data)
                    set({searchedProducts:data.data.products})
    
                } catch(error){
                    console.error(error)
                    set({error:"Error fetching products"})
                }
            }
        }
        
      ),
      {
        name: 'searching-storage', // Nombre único para el almacenamiento
        storage: createJSONStorage(() => localStorage), // Puedes cambiar esto a otro almacenamiento
      }
    )


  );

  export const useShoppingCartStore = create(
    persist(
        (set)=>({
            cart:[],
            addToCart:(product)=>{
                set((state)=>({
                    cart:[...state.cart, product]
                })

                )
            },

            deleteToCart: (product) => {
                
                set((state) => ({
                    cart: state.cart.filter((item) => item.asin !== product.asin),
                }));
            },

            refreshCart: () => {
               
                set((state) => ({
                    cart: state.cart.filter((item) => item.product_availability !== null),
                }));
            },
        }),
        {
            name:'cart-storage',
            storage: createJSONStorage(()=>localStorage),
        }
    )
  )











// export const useElectronicStore = create(
//   persist(
//     (set) => ({
//       electronicProducts: null,
//       loadingElectronic: true,
//       error: null,
//       fetchElectronicProducts: async () => {
//         const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
//         const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '694c161d7fmsh37dbfcec04c91abp1119d6jsnc14ada24ede7',
//             'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
//           }
//         };

//         try {
//           const response = await fetch(`${url}&query=iphone`, options);
//           const data = await response.json();
//           set({ electronicProducts: data.data.products, loadingElectronic: false });
//         } catch (error) {
//           console.error(error);
//           set({ loadingElectronic: false, error: "Error fetching products" });
//         }
//       },
//     }),
//     {
//       name: 'electronic-products-storage', // Nombre único para el almacenamiento
//       storage: createJSONStorage(() => localStorage), // Puedes cambiar esto a otro almacenamiento
//       whitelist: ['electronicProducts', 'loadingElectronic', 'error'], // Solo persiste estos estados
//     }
//   )
// );

