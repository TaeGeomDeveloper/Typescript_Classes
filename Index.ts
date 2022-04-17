
// index Signatures in class

// class => Object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
  //mark: string = 'male';
  //[index: string]: string;
  
  [index: string]: "male"|"female";
}

const a = new Students();

a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();

b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);