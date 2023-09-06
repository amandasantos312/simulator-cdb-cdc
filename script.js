function botao_calcular() {
    //Entradas:
    const cx_valor_investido = document.getElementById('cx-valor-investido')
    const cx_taxa_cdb = document.getElementById('cx-taxa-cdb')
    const cx_ano = document.getElementById('cx-ano')
    const cx_taxa_cdc = document.getElementById('cx-taxa-cdc')

    //Tratamento de Dados:
    const valor_investido = Number(cx_valor_investido.value)
    const taxa_cdb = Number(cx_taxa_cdb.value)
    const ano_vencimento = Number(cx_ano.value)
    const taxa_cdc = Number(cx_taxa_cdc.value)

    //Processamento CDB:
    const tempo_ano = calcular_tempo(ano_vencimento)
    const juros_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano)
    const valor_a_receber = valor_investido + juros_cdb
    const percentual_faturado = (juros_cdb / valor_investido) * 100

    const valor_emprestado = valor_investido

    //Processamento CDC:
    const tempo_meses = tempo_ano * 12
    const juros_cdc = calcular_juros_cdc(valor_emprestado, taxa_cdc, tempo_meses)
    const valor_a_pagar = valor_emprestado + juros_cdc
    const valor_parcela = valor_a_pagar / tempo_meses
    const percentual_total = (juros_cdc / valor_emprestado) * 100

    const lucro_banco = juros_cdc - juros_cdb

    //Saída:
    const result = `🟢----> CDB <----🟢
    Valor Investido: R$ ${valor_investido.toFixed(2)}
    Rendimento: R$ ${juros_cdb.toFixed(2)}
    Rendimento(%): ${percentual_faturado.toFixed(2)}
    Valor a Retirar: R$ ${valor_a_receber.toFixed(2)}
    \n💸----> CDC <----💸
    Valor Emprestado: ${valor_emprestado.toFixed(2)}
    Juros Empréstimo: ${juros_cdc.toFixed(2)}
    Valor a Pagar: ${valor_a_pagar.toFixed(2)}
    CET: ${percentual_total.toFixed(2)} %
    Valor Parcelas: ${tempo_meses}x de R$ ${valor_parcela.toFixed(2)}
    \n💵----> Lucro do Banco <----💵
    Lucro do Banco: R$ ${lucro_banco.toFixed(2)}`
    
    alert(result)
}

function calcular_tempo(ano) {
    return ano - 2023
}

function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano) {
    return calcular_juros_compostos(valor_investido, taxa_cdb, tempo_ano)
}

function calcular_juros_cdc(valor_emprestado, taxa_cdc, tempo_meses) {
    return calcular_juros_compostos(valor_emprestado, taxa_cdc, tempo_meses)
}

function calcular_juros_compostos(c, i, t) {
    const montante = c * (1 + (i/100))**t
    const juros = montante - c
    return juros
}
