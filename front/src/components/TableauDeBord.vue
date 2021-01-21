<template>
    <div class="tbd">
    <h2 style="color:white;">Tableau de bord</h2>
        <div class="box">
        
            <div class="cards">
                <p>Toutes les transactions</p>
                <div class="transactions">
                    <ul>
                        <li class="logo"><img src="../../public/images/starbucks.png" width="50px">Starbucks<article style="color: #9a4743;">- 16.50 €</article></li>
                        <li class="logo"><img src="../../public/images/macdo.png" width="50px">Macdonald<article style="color: #9a4743;">- 30 €</article></li>
                        <li class="logo"><img src="../../public/images/bk.png" width="50px">BurgerKing<article style="color: #9a4743;">- 21 €</article></li>
                    </ul>
                </div>
            </div>
            <div class="cards">
                <p>Solde</p>
                <h1>{{ dernierSolde }}</h1>
            </div>
            <div class="cards">
                <p>Planificateur</p>
            
            </div>
            <div class="cards">
                <p>Rapports</p>
            
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'TableauDeBord',
  props: {
    msg: String
  },
  data (){
    return {
      dernierSolde: null,
      info: null
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3000/transactions/')
      .then(response => {
          console.log(JSON.parse(response.data.message));
          this.info = JSON.parse(response.data.message).rows
          this.dernierSolde = this.info.pop().solde
          
      })
  }
}
</script>


<style>
    .tbd{
        width: 82%;
        height: 100%;
        float: left;
       
      
    }
    .tbd h2{
        padding: 2em;
    }
    .cards{
        background-color: #2c2f33;
        width: 25em;
        height: 20em;
        color: white;
        border-radius: 15px;
        text-align: left;
        margin-left: 4em;
        margin-bottom: 3em;
        float: left;
        
    }

    .cards p{
      padding: 2em;
      padding-bottom: 1em;
    }
    .cards h1{
      text-align: center;
      margin-top: 1.5em;
   
      color: #23915e;
    }
    .box{
        margin-left: 3.5em;
    }
    .transactions ul li{
        list-style: none;
        padding-bottom: 1em;
        
        
    }
    .transactions ul li article{
        padding-top: 0.5em;
        margin-right: 1em;
        font-size: 1.2em;
        font-weight: bold;
        float: right;
        
        
    }

    .transactions img{
        margin-right: 1.5em;
        border-radius: 50%;
        
    }
    
</style>