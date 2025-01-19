import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {API_URL} from '../../src/pages/api/constants'



// Crea tu tienda Zustand con el estado gamingProducts
const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
    const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '9addabb7a7msh486d26bb02f3730p13f249jsn2d2006fa318d',
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
                    const response = await fetch(`${API_URL}get-gaming-products`, {
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                    })
                    const {products} = await response.json()
                    
                    if (products){
                        set({gamingProducts:products, loadingGaming:false})
                    }
                    
                } catch(error){
                    console.error(error)
                    set({loadingGaming:false, error:"Error fetching products"})
                }
               
            },
    
            fetchElectronicProducts: async()=>{
              try {
                const response = await fetch(`${API_URL}get-electronic-products`, {
                    method:'GET',
                    headers:{
                        "Content-Type": "application/json"
                    }
                })

                const products = await response.json()

                console.log(products)

                if (products){
                    set({electronicProducts:products, loadingElectronic:false})
                }
              }

              catch(error){
                console.error(error)
                set({loadingElectronic:false, error:"Error fetching products"})}
               
            },
    
            fetchHealthProducts: async()=>{
               try {
                const response = await fetch (`${API_URL}get-health-products`, {
                    method: 'GET',
                    headers :{
                        "ContentType": "application/json"
                    }
                })

                const products = await response.json()

                if (products){
                    set({healthProducts: products, loadingHealth: false})
                }
               }

               catch (error) {
                    set({loadingHealth: false, error: 'Error fetching products'})
               }
               
            },
    
            fetchAutomotorsProducts: async()=>{
               try {
                const response = await fetch (`${API_URL}get-automotor-products`, {
                    method: "GET",
                    headers: {
                        "ContentType":"application/json"
                    }
                })

                const products = await response.json()

               

                if(products){
                    set({automotorsProducts:products, loadingAutomotors:false})
                }

                else{
                    set({loadingAutomotors: false, error:"Error fetching products"})
                }
               }

               catch {
                set({loadingAutomotors: false, error:"Error fetching products"})
               }
               
            },
    
            fetchClothesProducts: async()=>{
               try{
                const response = await fetch(`${API_URL}get-clothes-products`, {
                    method: "GET",
                    headers: {
                        "ContentType" : "application/json"
                    }
                })

                const products = await response.json()

                if (products){
                    set({clothesProducts: products, loadingClothes: false})
                }

                else{
                    set({error: "Error fetching products", loadingClothes: false})
                }
               }
               
               catch{
                set({error: "Error fetching products", loadingClothes: false})
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
        
        
            
            savedProduct:null,
            error:null,
            
    
    
            setSavedProduct: (data)=>{
                
                set({savedProduct:data})
    
                
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
            
            getSearchProducts: async (query, page, minPrice, maxPrice, orderBy, condition)=>{
               try{
                    const response = await fetch(`${API_URL}get-searched-products`, {
                        method: 'POST',
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify({
                            query, page, minPrice, maxPrice, orderBy, condition
                        })
                    })

                    const data = await response.json()

                    if (data){
                        set({searchedProducts: data.products})
                    }

                    else (
                        set({error: 'Error fetching products'})
                    )
               }

               catch {
                    set ({error: 'Error fetching produts'})
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
            subtotal:0,
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

            setSubTotal: (subtotal)=> {
                set((state)=>({
                    subtotal: subtotal
                }))
            }
        }   ),
        {
            name:'cart-storage',
            storage: createJSONStorage(()=>localStorage),
        }
    )
  );

  export const usePriceChanger = create (
    persist(
        (set)=>({
            vesPrice:false,

            setVesPrice: ()=>{
                set((state)=>({
                    vesPrice: !state.vesPrice
                }))
            }
        }),
        {
            name:'price-state',
            storage: createJSONStorage(()=>localStorage)
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

