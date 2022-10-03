import kof from './capas/kof.jpg'
import halo from './capas/haloinfinite.jpg'
import diablo2 from './capas/diablo2.jpg'
import farcry6 from './capas/farcry6.jpg'
import eldenring from './capas/eldenRing.jpg'
import demonslayer from './capas/demonSlayer.jpg'
import horizonzero from './capas/horizon.png'
import hades from './capas/hades.jpg'
import back4blood from './capas/back4blood.jpg'

function importAll(r){
  let images = []
  r.keys().map((item, index)=>{
    images.push(r(item));
  })
  return images
}

const imagesKof = importAll(require.context('./screenshots/kof', false, /\.(png|jpe?g|svg)$/))
const imagesHaloInf = importAll(require.context('./screenshots/haloInfinite', false, /\.(png|jpe?g|svg)$/))
const imagesDiablo2Ress = importAll(require.context('./screenshots/diablo2Ress', false, /\.(png|jpe?g|svg)$/))
const imagesFC6 = importAll(require.context('./screenshots/farcry6', false, /\.(png|jpe?g|svg)$/))
const imagesEldenRing = importAll(require.context('./screenshots/eldenRing', false, /\.(png|jpe?g|svg)$/))
const imagesDSlayer = importAll(require.context('./screenshots/demonSlayer', false, /\.(png|jpe?g|svg)$/))
const imagesHorizonZero = importAll(require.context('./screenshots/horizonZero', false, /\.(png|jpe?g|svg)$/))
const imagesHades = importAll(require.context('./screenshots/hades', false, /\.(png|jpe?g|svg)$/))
const imagesBack4Blood = importAll(require.context('./screenshots/back4blood', false, /\.(png|jpe?g|svg)$/))

const jogos = [
    {
        id: 1,
        nome: "The King of Fighters XV",
        capa: kof,
        preco: 125,
        desconto: 0.1,
        click: 0,
        descricao: 'Desde a estreia em 1994, a série de jogos de luta KOF tem oferecido emoções pelo mundo com personagens cativantes e um sistema de jogo incomparável. Seis anos depois do último título da série, KOF XV supera todos os antecessores em termos de gráficos, sistemas e experiência online!',
        screens: imagesKof
      },
      {
        id: 2,
        nome: "Halo Infinite",
        capa: halo,
        preco: 250,
        desconto: 0,
        click: 0,
        descricao: 'Halo Infinite oferece uma experiência incrível no Xbox One e na família de consoles mais recentes, bem como no PC com gráficos 4K impressionantes e jogabilidade multiplataforma de qualidade internacional. E no Xbox Series X, bem como nos PCs com suporte, desfrute de recursos aprimorados como até 120 FPS e tempos de carregamento muito reduzidos, criando uma jogabilidade perfeita que inaugura a próxima geração de jogos.',
        screens: imagesHaloInf
      },
      {
        id: 3,
        nome: "Diablo 2 - Resurrected",
        capa: diablo2,
        preco: 215,
        desconto: 0,
        click: 0,
        descricao: 'Diablo II: Resurrected inclui todo o conteúdo de Diablo II e sua expansão épica Diablo II: Lord of Destruction®. Lute por cavernas geladas, tumbas horríveis cheias de abominações mortas-vivas e terras desertas congeladas até o cume frígido do Monte Arreat e detenha Baal, o Senhor da Destruição. Faça um inferno com todas as sete classes jogáveis de Diablo II e Lord of Destruction, incluindo o astuto Assassino, mestre das armadilhas e disciplinas das sombras, e o Druida selvagem, um metamorfo ousado e invocador que comanda a magia elemental primordial.',
        screens: imagesDiablo2Ress
      },
      {
        id: 4,
        nome: "Farcry 6",
        capa: farcry6,
        preco: 159,
        desconto: 0,
        click: 0,
        descricao: 'Bem-vindo a Yara, um paraíso tropical parado no tempo. Como ditador de Yara, Antón Castillo (Giancarlo Esposito) está decidido a restaurar sua nação de volta à sua antiga glória de qualquer maneira possível, com seu filho, Diego, obedientemente ao seu lado. Seu governo opressor deu início a uma revolução.',
        screens: imagesFC6
      },
      {
        id: 5,
          nome: "Elden Ring",
          capa: eldenring,
          preco: 180,
          desconto: 0.15,
          click: 0,
          descricao: 'ELDEN RING, desenvolvido pela FromSoftware, Inc. e pela BANDAI NAMCO Entertainment Inc., é uma aventura de RPG de ação e fantasia ambientada em um mundo criado por Hidetaka Miyazak e George R. R. Martin. O perigo e a descoberta estão à espreita em cada canto do maior jogo da FromSoftware até hoje. Hidetaka Miyazaki - Presidente e Diretor de Jogos da FromSoftware Inc. Conhecido por dirigir jogos aclamados pela crítica em franquias de muita popularidade, incluindo Armored Core e Dark Souls.',
          screens: imagesEldenRing
      },
      {
        id: 6,
          nome: "Demon Slayer",
          capa: demonslayer,
          preco: 430,
          desconto: 0.05,
          click: 0,
          descricao: 'No modo para um jogador, você trilha o caminho de Tanjiro Kamado, cuja família foi massacrada e a irmã transformada em um demônio. Vivencie a narrativa retratada no anime "Demon Slayer: Kimetsu no Yaiba" e as batalhas de Tanjiro para restaurar a humanidade de Nezuko e enfrentar a ameaça demoníaca!',
          screens: imagesDSlayer
      },
      {
        id: 7,
          nome: "Horizon Zero Dawn",
          capa: horizonzero,
          preco: 350,
          desconto: 0,
          click: 0,
          descricao: 'Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino.',
          screens: imagesHorizonZero
          
      },
      {
        id: 8,
        nome: "Hades",
        capa: hades,
        preco: 200,
        desconto: 0,
        click: 0,
        descricao: 'Na pele do Príncipe imortal do Submundo, empunhas os poderes e as armas míticas do Olimpo para te libertares das garras do deus dos mortos, ao mesmo tempo que te tornas mais forte e desvendas mais da história com cada tentativa de fuga única.',
        screens: imagesHades
      },
      {
        id: 9,
        nome: "Back 4 Blood",
        capa: back4blood,
        preco: 150,
        desconto: 0.2,
        click: 0,
        descricao: 'Back 4 Blood é um jogo de tiro em primeira pessoa dos criadores da franquia aclamada pela crítica Left 4 Dead. Você está no centro de uma guerra contra os contagiados. Esses humanos portadores de um parasita mortal se transformaram em criaturas assustadoras inclinadas a devorar os restos da civilização. Com a extinção da humanidade em jogo, cabe a você e seus amigos enfrentar esse inimigo, erradicar os corrompidos e reconquistar o mundo.',
        screens: imagesBack4Blood
      }
]

export default jogos;