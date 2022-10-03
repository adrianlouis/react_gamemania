import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) =>{

    const [wishlist, setWishlist] = React.useState([])
    const [preco, setPreco] = React.useState(0)
    const [resumoDesconto, setResumoDesconto] = React.useState(0)
    const [logado, setLogado] = React.useState(null)
    const [users, setUsers] = React.useState([{email:'Louis', senha:'code'}])
    const [jogos, setJogos] = React.useState([
        {
          id: 1,
          nome: "The King of Fighters XV",
          capa: "kof.jpg",
          preco: 125,
          desconto: 0.1,
          click: 0
        },
        {
          id: 2,
          nome: "Halo Infinite",
          capa: "haloinfinite.jpg",
          preco: 250,
          click: 0
        },
        {
          id: 3,
          nome: "Diablo 2",
          capa: "diablo2.jpg",
          preco: 215,
          descricao: "Jogao de RPG",
          click: 0
        },
        {
          id: 4,
          nome: "Farcry 6",
          capa: "farcry6.jpg",
          preco: 159,
          click: 0
        },
        {
          id: 5,
            nome: "Elden Ring",
            capa: "eldenRing.jpg",
            preco: 180,
            desconto: 0.15,
            click: 0
        },
        {
          id: 6,
            nome: "Demon Slayer",
            capa: "demonSlayer.jpg",
            preco: 430,
            desconto: 0.05,
            click: 0
        },
        {
          id: 7,
            nome: "Horizon Zero Dawn",
            capa: "horizon.png",
            preco: 350,
            click: 0
        },
        {
          id: 8,
          nome: "Hades",
          capa: "hades.jpg",
          preco: 200,
          click: 0
        },
        {
          id: 9,
          nome: "Back 4 Blood",
          capa: "back4blood.jpg",
          preco: 150,
          desconto: 0.2,
          click: 0
        }
      ]);


    const jogosMaisVendidos = [{
      nome: "The King of Fighters XV",
      capa: "kof.jpg",
      preco: 125,
      desconto: 0.1,
    }]


    
      return <GlobalContext.Provider value={{users, logado, setLogado, setUsers, jogos, setJogos, jogosMaisVendidos, preco, setPreco, resumoDesconto, setResumoDesconto, wishlist, setWishlist}}>{children}</GlobalContext.Provider>
}