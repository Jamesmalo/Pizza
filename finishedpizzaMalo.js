class pizza{
  constructor(s,mt,vt){
    this.size=s;
    this.meattoppings=mt;
    this.veggietoppings=vt;
  }
  sizecost(){
    if (this.size=="S"){
        return 7.99
    }
    else if (this.size=="M"){
        return 9.99
    }
    else if(this.size=="L"){
        return 12.99
    }
    else if(this.size=="XL"){
        return 15.99
    }
  }
  toppingcost(top){
    if(top=="meat"){
        return this.meattoppings.length*.99
    }
    else if(top=="veggie"){
        return this.veggietoppings.length*.50
    }
  }
  price(){
    return this.sizecost()+this.toppingcost("meat")+this.toppingcost("veggie")
    }


  //type class functions below
static promotionalDeal(pizza,percent){
  let decimal = percent/100;
  return this.price()-this.price()*decimal
  }
}
let myfavpizza = new pizza("L",["bacon"],["spinach"])
