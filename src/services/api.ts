export const fetchProducts = async () =>{
    const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
    const data = await response.json()
    return data
}