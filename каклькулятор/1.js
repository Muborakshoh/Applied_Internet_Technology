
const unit1Select = document.getElementById("unit1");
const unit2Select = document.getElementById("unit2");
const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");


const conversionFactors = {
    kg: {
        kg: 1,
        mg: 1e+6,
        g: 1000,
        c: 0.01,
        t: 0.001,
        lb: 2.20462,
        oz: 35.274,
    },
    mg: {
        kg: 1e-6,
        mg: 1,
        g: 0.001,
        c: 1e-8,
        t: 1e-9,
        lb: 2.20462e-6,
        oz: 3.5274e-5,
    },
    g: {
        kg: 0.001,
        mg: 1000,
        g: 1,
        c: 1e-5,
        t: 1e-6,
        lb: 0.00220462,
        oz: 0.035274,
    },
    c: {
        kg: 100,
        mg: 1e+8,
        g: 100000,
        c: 1,
        t: 0.01,
        lb: 220.462,
        oz: 3527.4,
    },
    t: {
        kg: 1000,
        mg: 1e+9,
        g: 1e+6,
        c: 100,
        t: 1,
        lb: 2204.62,
        oz: 35274,
    },
    lb: {
        kg: 0.453592,
        mg: 453592,
        g: 453.592,
        c: 0.00453592,
        t: 0.000453592,
        lb: 1,
        oz: 16,
    },
    oz: {
        kg: 0.0283495,
        mg: 28349.5,
        g: 28.3495,
        c: 0.000283495,
        t: 2.83495e-5,
        lb: 0.0625,
        oz: 1,
    },
};


function convert() {
    
    const unit1 = unit1Select.value;
    const unit2 = unit2Select.value;
    const value1 = parseFloat(value1Input.value);

    
    const result = value1 * conversionFactors[unit1][unit2];

    
    value2Input.value = result.toFixed(6);
}




unit1Select.addEventListener("change", convert);
unit2Select.addEventListener("change", convert);
value1Input.addEventListener("input", convert);


convert();


const unit3Select = document.getElementById("unit3");
const unit4Select = document.getElementById("unit4");
const value3Input = document.getElementById("value3");
const value4Input = document.getElementById("value4");


const conversionFactors1 = {
    m: {
        m: 1,
        ml: 1e+3,
        cn: 100,
        dc: 10,
        kl: 0.001,
        ft: 3.28084,
        in: 39.37008,
        yd: 1.093613,
        mi: 0.000621
    },
    ml: {
        m: 0.001,
        ml: 1,
        cn: 0.1,
        dc: 0.01,
        kl: 0.000001,
        ft: 0.003281,
        in: 0.03937008,
        yd: 0.001093613,
        mi: 0.00000006213771192
    },
    cn: {
        m: 0.01,
        ml: 10,
        cn: 1,
        dc: 0.1,
        kl: 0.00001,
        ft: 0.03281,
        in: 0.3937008,
        yd: 0.01093613,
        mi: 0.0000006213771192
    },
    dc: {
        m: 0.1,
        ml: 100,
        cn: 10,
        dc: 1,
        kl: 0.0001,
        ft: 0.3281,
        in: 3.937008,
        yd: 0.1093613,
        mi: 0.000006213771192
    },
    kl: {
        m: 1000,
        ml: 1000000,
        cn: 100000,
        dc: 10000,
        kl: 1,
        ft: 3280.84,
        in: 39370.08,
        yd: 1093.613,
        mi: 0.6213771192
    },
    ft: {
        m: 0.3048,
        ml: 304.8,
        cn: 30.48,
        dc: 3.048,
        kl: 0.000305,
        ft: 1,
        in: 12,
        yd: 0.333333,
        mi: 0.000189
    },
    in: {
        m: 0.0254,
        ml: 25.4,
        cn: 2.54,
        dc: 0.254,
        kl: 0.000025,
        ft: 0.08333,
        in: 1,
        yd: 0.027778,
        mi: 0.000016
    },
    yd: {
        m: 0.9144,
        ml: 914.4,
        cn: 91.44,
        dc: 9.144,
        kl: 0.000914,
        ft: 3,
        in: 36,
        yd: 1,
        mi: 0.000568
    },
    yd: {
        m: 1609.344,
        ml: 1609344,
        cn: 160934.4,
        dc: 16093.44,
        kl: 1.609344,
        ft: 5280,
        in: 63360,
        yd: 1760,
        mi: 1
    },




};


function convert1() {
   
    const unit3 = unit3Select.value;
    const unit4 = unit4Select.value;
    const value3 = parseFloat(value3Input.value);

    
    const result = value3 * conversionFactors1[unit3][unit4];

   
    value4Input.value = result.toFixed(6);
}


unit3Select.addEventListener("change", convert1);
unit4Select.addEventListener("change", convert1);
value3Input.addEventListener("input", convert1);


convert1();



const unit5Select = document.getElementById("unit5");
const unit6Select = document.getElementById("unit6");
const value5Input = document.getElementById("value5");
const value6Input = document.getElementById("value6");


const conversionFactors2 = {

    mkc: {
        mkc: 1,
        mlc: 0.001,
        sec: 0.000001,
        min: 0.000000016666667,
        ch: 0.000000000277778,
        day: 0.000000000011574,
        nday: 0.000000000001653,
        year: 0.000000000000032,
    },
    mlc: {
        mkc: 1000,
        mlc: 1,
        sec: 0.001,
        min: 0.000016666667,
        ch: 0.000000277778,
        day: 0.000000011574,
        nday: 0.000000001653,
        year: 0.000000000032,
    },
    sec: {
        mkc: 1000000,
        mlc: 1000,
        sec: 1,
        min: 0.016666667,
        ch: 0.000277778,
        day: 0.000011574,
        nday: 0.000001653,
        year: 0.000000032,
    },
    min: {
        mkc: 60000000,
        mlc: 60000,
        sec: 60,
        min: 1,
        ch: 0.016667,
        day: 0.000694,
        nday: 0.000099,
        year: 0.00002,
    },
    ch: {
        mkc: 3600000000,
        mlc: 3600000,
        sec: 3600,
        min: 60,
        ch: 1,
        day: 0.041667,
        nday: 0.005952,
        year: 0.000114,
    },
    day: {
        mkc: 86400000000,
        mlc: 86400000,
        sec: 86400,
        min: 1440,
        ch: 24,
        day: 1,
        nday: 0.142857,
        year: 0.002738,
    },
    nday: {
        mkc: 604800000000,
        mlc: 604800000,
        sec: 604800,
        min: 10080,
        ch: 168,
        day: 7,
        nday: 1,
        year: 0.019165,
    },
    year: {
        mkc: 31557600000000,
        mlc: 31557600000,
        sec: 604800,
        min: 10080,
        ch: 168,
        day: 7,
        nday: 1,
        year: 0.019165,
    },



};


function convert2() {
    
    const unit5 = unit5Select.value;
    const unit6 = unit6Select.value;
    const value5 = parseFloat(value5Input.value);

    
    const result = value5 * conversionFactors2[unit5][unit6];

   
    value6Input.value = result.toFixed(15);
}


unit5Select.addEventListener("change", convert2);
unit6Select.addEventListener("change", convert2);
value5Input.addEventListener("input", convert2);


convert2();