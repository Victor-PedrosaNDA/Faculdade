const prompt = require("prompt-sync")();
            
                console.log("Agora com For: ");
        let c,i;
        for(let i=0; i<=5;i++){
          let  c=2*i;
                console.log("A conta eh: ",c )
        }
        console.log("Agora com While: ");
        let j=0;
        while(j<=5){
            d=2*j;
            console.log("A conta eh: ",d )
            j++;
        }

        console.log("Agora com Do While: ");
        let k=0;
        do{
            let e=2*k;
            console.log("A conta eh: ",e )
            k++;
        }while(k<=5);