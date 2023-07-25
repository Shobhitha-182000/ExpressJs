module.exports=class Item{
      item=[];
    constructor(item){
        this.item=item;
    }
    save(){
        item.push(this);
    }
    static fetchALl(){
        console.log(item);
        return item;
    }
}