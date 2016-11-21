class pizza{
  constructor(s,mt,vt){
    this.size=s;
    this.meattoppings=mt;
    this.veggietoppings=vt;

  sizecost(){
    if (this.size=="s"){
        return 7.99
    }
    if (this.size=="m"){
        return 9.99
    }
    if(this.size=="l"){
        return 12.99
    }
    if(this.size=="xl"){
        return 15.99
    }
    else{
      console.log("Choose the pizza size");
    }
  toppingcost(top)
    if(top=="meat"){
        return this.meattoppings.length*.99
    }
    else if(top=="veggie"){
        return this.veggietoppings.length*.50
    }
  price(){
    return this.sizecost()+this.toppingcost()
    }
  //type class functions below
static.promotionalDeal(pizza,percent){
  return this.price()==this.sizecost()*percent
  }
