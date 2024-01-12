class SuperHero
{
    constructor(name)
    {
        this.name=name;
    }
     setName(name)
    {
        this.name=name;
    }
    getName(name)
    {
        return this.name;
    }
}
module.exports=new SuperHero("rahul");