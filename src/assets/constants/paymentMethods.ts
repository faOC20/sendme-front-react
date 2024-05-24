

export const paymentMethods = [
    {
        id:1,
        category: 'VES',
        name:'banco de venezuela',
        url:"https://bancodevenezuela.com/wp-content/uploads/2023/03/logonuevo.png",
        accountNum:'0102-0674-5065-0134',
        accountType:'Corriente',
        number: '0424-8066999',
        code: '0102',
        dni: '29.687.038',
        accountHolder : 'Fabian Ortiz'

    },

    {
        id:2,
        category: 'VES',
        name: 'banesco',
        url: "https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banesco2015/imagenes/logo.png",
        accountNum:'0134-0674-5065-0134',
        accountType:'Ahorro',
        number: '0414-7777477',
        code: '0134',
        dni: '29.822.326',
        accountHolder : 'Elia Nssier'
        

    },

    {
        id:3,
        category: 'VES',
        name: 'exterior',
        url: 'https://www.bancoexterior.com/wp-content/uploads/2023/02/Banco-Exterior-Logo-Horizontal-Blanco.svg',
        accountNum:'0115-0674-5065-0134',
        accountType:'Corriente',
        number: '0424-8066999',
        code: '0115',
        dni: '29.687.038',
        accountHolder : 'Fabian Ortiz'
        
    }
    ,
    {
        id:4,
        category: 'USD',
        name: 'Binance',
        url:  'data:image/png;base64,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',
        email:'fabianortizfc@gmail.com',
        number: '0424-8066999',
        accountHolder : 'Fabian Ortiz'
        
    },

    {
        id:5,
        category: 'USD',
        name: 'Paypal',
        url: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/250px-PayPal.svg.png",
        email:'fabianortizfc@gmail.com',
        number: '0424-8066999',
        accountHolder : 'Fabian Ortiz'
        
        
    }
    ,
    {
        id:6,
        category: 'USD',
        name: 'Zinli',
        url:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqwoWZGaZuT8Oy-xRDdrWDjHpwyrdcTbaOVVkCWEguEk1N9jQuQA5Qj79EOamkfRFDIEHtBvKdQf2RtlfNhDiNmW4PfYTnHYW2WF9WsDkRJ9u-YTDnlNoJAuSDmTy0pxM7mH9DosD-XDnUltgZYJ6A10Db3JD0KeBOak3HXIS9GIRNKNUpLP1Kx82UUw/s2000/icon-zinli.png",
        email:'fabianortizfc@gmail.com',
        number: '0424-8066999',
        accountHolder : 'Fabian Ortiz'
        
        
    }

    
]

export const coinOptions = [
    {
        id:1,
        name: 'Bolívares',
        code: 'VES',
    }
    ,
    {
        id:2,
        name:'Dólares',
        code:'USD'
    }
]