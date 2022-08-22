import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) =>{

    const [wishlist, setWishlist] = React.useState([])
    const [preco, setPreco] = React.useState(0)
    const [resumoDesconto, setResumoDesconto] = React.useState(0)
    const jogos = [
        {
          nome: "The King of Fighters XV",
          capa: "kof.jpg",
          preco: 125,
          desconto: 0.1,
        },
        {
          nome: "Halo Infinite",
          capa: "haloinfinite.jpg",
          preco: 250,
        },
        {
          nome: "Diablo 2",
          capa: "diablo2.jpg",
          preco: 215,
        },
        {
          nome: "Farcry 6",
          capa: "farcry6.jpg",
          preco: 159,
        },
        {
            nome: "Elden Ring",
            capa: "eldenRing.jpg",
            preco: 180,
            desconto: 0.15
        },
        {
            nome: "Demon Slayer",
            capa: "demonSlayer.jpg",
            preco: 430,
            desconto: 0.05
        },
        {
            nome: "Horizon Zero Dawn",
            capa: "horizon.png",
            preco: 350
        }
      ];


    
      return <GlobalContext.Provider value={{jogos, preco, setPreco, resumoDesconto, setResumoDesconto, wishlist, setWishlist}}>{children}</GlobalContext.Provider>
}