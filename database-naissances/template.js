[
  "{{repeat(15, 30)}}",
  {
    _id: "{{objectId()}}",
    picture: "http://placehold.it/32x32",
    age: "{{integer(20, 40)}}",
    status: '{{random("NEW", "ON_GOING", "VALIDATED", "REJECTED")}}',
    registered:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    child: {
      gender: "{{gender()}}",
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      birthDate:
        '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    },
    firsparent: {
      gender: "{{gender()}}",
      eyeColor: '{{random("blue", "brown", "green")}}',
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      email: "{{email()}}",
      phone: "+1 {{phone()}}",
      address:
        "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    },

    seconParent: {
      gender: "{{gender()}}",
      eyeColor: '{{random("blue", "brown", "green")}}',
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      email: "{{email()}}",
      phone: "+1 {{phone()}}",
      address:
        "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    },

    company: {
      name: "{{company().toUpperCase()}}",
      address:
        "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    },
  },
];
