import { useState, useEffect } from "react"
import axios from "axios"

function GlobalState (){

     //Daniel: variável para armazenar informações de Card
  const [cardsBase, setCardsBase] = useState([])

  //Daniel: variável para armazenar informações do Cart
  const [cart, setCart] = useState([])

  //Daniel: variável para armazenar informações gerais do pedido do cliente
  const [purchase, setPurchase] = useState([{itens:[...cart],discount:0,freight:0,qtdTotalPurchase:0,totalPurchaseItems:0,totalPurchase:0}])

  //Daniel: variável para armazenar forma de pagamento (modo de pagamento, parcela
  const [formPayment, setFormPayment] = useState({payment:"",portion: 1})

  //Daniel: variável para armazenar o cupom de desconto
  const [coupon, setCoupon] = useState('')

  //Daniel: variavel para busca de Cards por nome
  const [search, setSearch] = useState('')

  //Daniel: variavel para busca de Cards por tipo
  const [searchType, setSearchType] = useState('')

  //Daniel: variavel para o carregamento de card
  const [loading, setLoading] = useState(false)

  //Daniel: variável para indicar o tipo de ação para acessar algum Modal de ação
  const [action, setAction] = useState("")

  //Daniel: variável para indicar o tipo de ação para acessar algum Modal de mensagem de status de ação
  const [message, setMessage] = useState("")

  //Daniel: variavel para ativar algum Modal
  const [showModal, setShowModal] = useState(false)

  //Daniel: variável para ativar o DarkMode
  const [darkMode, setDarkMode] = useState(false)

  //Daniel: Variável para gerenciar o nº de páginas
  const [pageNumber, setPageNumber] = useState(1)

  //Daniel: variavel para armazenar o numero da última página
  const [lastPage, setLastPage] = useState(1) 

  //Daniel: Variável para gerenciar o nº de cards por página
  const [perPage, setPerPage] = useState(24)

  //Daniel: variavel para armazenar total de cadastros de usuários
  const [numberCard, setNumberCard] = useState('') 

  //Daniel: variavel para armazenar a posição inicial do usuário que será renderizado na página
  const startPage = (pageNumber * perPage)-21 
  
  //Daniel: variavel para armazenar a posição final do usuário que será renderizado na página
  const endPage = startPage + perPage 

  //Daniel: hook utilizado para renderizar o numero de itens por página
    useEffect(()=>{
    },[pageNumber])

    //Daniel: hook utilizado para atualizar o pedido de compras na atualização do carrinho
    useEffect(()=>{
    },[cart])

    //Daniel: função para consumir a API
   


    //Função para separar o pedido de compra do cliente
    function purchaseClient () {

        const auxPurchase = []
        let totalPurchase = Number(0)
        let totalPurchaseItems = Number(0)
        let qtdTotalPurchase = Number(0)

    
        
        let discount = coupon === 'DEV' && totalPurchase > 50 ? 25 : 0
        let freight= totalPurchase > 25 ? 0 : 50
        totalPurchase = ((totalPurchaseItems + freight) - discount)

        auxPurchase.push({itens:[...cart],discount:discount,freight:freight,qtdTotalPurchase:qtdTotalPurchase,totalPurchaseItems:totalPurchaseItems,totalPurchase:totalPurchase})
        setPurchase(auxPurchase)
       
        return
    }


  return {
    cardsBase,
    setCardsBase,
    cart,
    setCart,
    purchase,
    setPurchase,
    formPayment,
    setFormPayment,
    coupon, 
    setCoupon,
    search,
    setSearch,
    searchType, 
    setSearchType,
    loading,
    setLoading,
    action,
    setAction,
    message,
    setMessage,
    showModal,
    setShowModal,
    darkMode,
    setDarkMode,
    lastPage, 
    setLastPage,
    pageNumber,
    setPageNumber,
    perPage, 
    setPerPage,
    numberCard, 
    setNumberCard,
    startPage,
    endPage,
  }

}
 

  export default GlobalState