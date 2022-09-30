import kof from './capas/kof.jpg'
import halo from './capas/haloinfinite.jpg'
import diablo2 from './capas/diablo2.jpg'
import farcry6 from './capas/farcry6.jpg'
import eldenring from './capas/eldenRing.jpg'
import demonslayer from './capas/demonSlayer.jpg'
import horizonzero from './capas/horizon.png'
import hades from './capas/hades.jpg'
import back4blood from './capas/back4blood.jpg'

const jogos = [
    {
        id: 1,
        nome: "The King of Fighters XV",
        capa: kof,
        preco: 125,
        desconto: 0.1,
        click: 0,
        descricao: 'Desde a estreia em 1994, a série de jogos de luta KOF tem oferecido emoções pelo mundo com personagens cativantes e um sistema de jogo incomparável. Seis anos depois do último título da série, KOF XV supera todos os antecessores em termos de gráficos, sistemas e experiência online!'
      },
      {
        id: 2,
        nome: "Halo Infinite",
        capa: halo,
        preco: 250,
        desconto: 0,
        click: 0
      },
      {
        id: 3,
        nome: "Diablo 2 - Resurrected",
        capa: diablo2,
        preco: 215,
        desconto: 0,
        click: 0,
        descricao: ''
      },
      {
        id: 4,
        nome: "Farcry 6",
        capa: farcry6,
        preco: 159,
        desconto: 0,
        click: 0
      },
      {
        id: 5,
          nome: "Elden Ring",
          capa: eldenring,
          preco: 180,
          desconto: 0.15,
          click: 0
      },
      {
        id: 6,
          nome: "Demon Slayer",
          capa: demonslayer,
          preco: 430,
          desconto: 0.05,
          click: 0
      },
      {
        id: 7,
          nome: "Horizon Zero Dawn",
          capa: horizonzero,
          preco: 350,
          desconto: 0,
          click: 0
      },
      {
        id: 8,
        nome: "Hades",
        capa: hades,
        preco: 200,
        desconto: 0,
        click: 0
      },
      {
        id: 9,
        nome: "Back 4 Blood",
        capa: back4blood,
        preco: 150,
        desconto: 0.2,
        click: 0
      }
]

export default jogos;