function calcularDistancia(ponto1, ponto2) {
  const dx = ponto1.x - ponto2.x;
  const dy = ponto1.y - ponto2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function ordenarClientesPorDistancia(coordenadas, clientes) {
  return coordenadas
    .map((coordenada, index) => {
      return {
        cliente: clientes[index],
        distancia: calcularDistancia(coordenada, { x: 0, y: 0 }),
        rota: coordenada,
      };
    })
    .sort((a, b) => a.distancia - b.distancia);
}

function calcularRotaMaisCurta(clientes) {
  const coordenadas = [];
  const rota = [{ x: 0, y: 0 }];

  clientes.forEach((cliente) => {
    coordenadas.push({ x: cliente.coordenada_x, y: cliente.coordenada_y });
  });

  const clientesOrdenados = ordenarClientesPorDistancia(coordenadas, clientes);

  const resultadoFiltrado = clientesOrdenados.map((cliente) => {
    rota.push(cliente.rota);
    return cliente.cliente;
  });
  rota.push({ x: 0, y: 0 });

  return { clientes: resultadoFiltrado, rota };
}
module.exports = calcularRotaMaisCurta;
