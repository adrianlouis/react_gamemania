function jogoParseReal(p, d) {
  if (d === null || d === 0) {
    const preco = p.toLocaleString("pt-Br", {
      style: "currency",
      currency: "BRL",
    });
    return preco;
  } else {
    const preco = (p - d * p).toLocaleString("pt-Br", {
      style: "currency",
      currency: "BRL",
    });
    return preco;
  }
}

export default jogoParseReal;