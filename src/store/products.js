import { create } from "zustand";


export const useProductsStore = create((set)=>{

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
    const options = {
	method: 'GET',
	headers: {
        // 'X-RapidAPI-Key': 'b774369b69mshdd866bc809ffed2p1d1fb0jsn3aa699f86cf3',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};
    
    return{
        allProducts: [],
        gamingProducts:[],
        electronicProducts:[],
        healthProducts:[],
        automotorsProducts:[],
        homeProducts:[],
        clothesProducts:[],
        
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
                const response = await fetch(`${url}&query=phone`,options)
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

        getClickedProduct: async (id)=>{
            try{
                const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}&country=US`)
                const data = await response.json()
                return data.data

            } catch(error){
                console.error(error)
                set({loading:false, error:"Error fetching products"})
            }
        }



        
        



    }
});
