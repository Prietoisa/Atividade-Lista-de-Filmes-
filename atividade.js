function emprestimo(idade, valor, salario, parcela){
    if (idade> 21 && idade<56 && valor>=1000 && valor<salario*15 && parcela>3 && parcela<20){
        
        let ValorParcelaComJuros = (valor* Math.pow ((1+ (0.8/100)),parcela));
        ValorParcelaComJuros= ValorParcelaComJuros.toFixed(2);
        let ValorParcela =(ValorParcelaComJuros/parcela); 
        ValorParcela= ValorParcela.toFixed(2);

        return(`Empréstimo aprovado valor a ser pago é ${ValorParcela} O valor total do empréstimo é ${ValorParcelaComJuros}`);
    }

    else{
        return'Empréstimo recusado'
    }
}