// Questão 2:
db.clientes.find({cidade: "Fortaleza"})

// Questão 3:
db.clientes.find(
  {
    cidade: "Fortaleza",
    idade: {$gt: 25}
  },
)

// Questão 4:
db.produtos.find(
  { categoria: "Periféricos"},
  {nome: 1, preco: 1, _id: 0}
)

// Questão 5:
db.produtos.find({
  preco:{
    $gte: 200,
    $lte: 400
  }
})

// Questão 6:
db.clientes.find({
  cidade: { $ne: "Fortaleza" },
  idade: { $gte: 20 }
})

// Questão 7:
db.clientes.find({
  clienteVip: {$exists: true}
})
db.clientes.find({
  idade: { $type: "number" }
})

// Questão 8:
db.clientes.insertOne({
  nome: "Jorge",
  idade: 22,
  cidade: "Salvador"
})

// Questão 9:
db.clientes.updateOne(
  { nome: "Marcos" },
  { $set: { cidade: "Natal" } }
)

// Questão 10:
db.clientes.updateOne(
  { nome: "Lucas" },
  {
    $set: { status: "ativo" },
    $inc: { idade: 1 }
  }
)

// Questão 11:
db.clientes.replaceOne(
  { nome: "Julia" },
  { nome: "Julia", idade: 31, cidade: "Rio de Janeiro", clienteVip: true }
)

// Questão 12:
db.produtos.updateMany(
  {},
  {
    $rename: { preco: "valor" },
    $unset: { categoria: "" }
  }
)

// Questão 13:
db.produtos.deleteOne({nome: "FIFA 25"})

// Questão 14:
db.clientes.find({
  cidade: {$in: ["São Paulo", "Recife"]}
})

// Questão 15:
db.vendas.aggregate([
  {
    $lookup: {
      from: "produtos",
      localField: "produtoId",
      foreignField: "_id",
      as: "dados_do_produto"
    }
  }
])

// Questão 16:
db.vendas.aggregate([
  {
    $lookup: {
      from: "produtos",
      localField: "produtoId",
      foreignField: "_id",
      as: "produto_info"
    }
  },
  {
    $unwind: "$produto_info"
  },
  {
    $group: {
      _id: "$produto_info.categoria",
      total_vendido: { $sum: "$quantidade" }
    }
  }
])

// Questão 17:
db.vendas.aggregate([
  {
    $lookup: {
      from: "produtos",
      localField: "produtoId",
      foreignField: "_id",
      as: "produto_info"
    }
  },
  {
    $unwind: "$produto_info"
  },
  {
    $group: {
      _id: "$produto_info.categoria",
      total_vendido: { $sum: "$quantidade" }
    }
  }
])

// Questão 18:
db.produtos.find().sort({ preco: -1 }).limit(2)

// Questão 19:
db.produtos.find().sort({ valor: -1 }).skip(2).limit(3)