const mongoose = require("mongoose");
const Action = require("./action.model");

// mongoose.connect("mongodb://mongodb:27017/lifeC", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   keepAlive: 1,
//   useUnifiedTopology: true
// });

mongoose.connect("mongodb://localhost:27017/lifeC", {
  useNewUrlParser: true,
  useCreateIndex: true,
  keepAlive: 1,
  useUnifiedTopology: true
});

Action.collection.drop();

const actions = [
  new Action({
    total_premium: 1000,
    debit_order: {
      day: "1",
      amount: 10
    },
    disability_cover: 1000000,
    disability_premium: 100,
    cover_start_date: new Date("2019-09-25"),
    income_protection_premium: 300,
    income_protection_cover: 3000000,
    critical_illness_cover: 2000000,
    critical_illness_premium: 200,
    label: "New Life Insurance",
    life_cover: 4000000,
    life_premium: 400,
    action_type: "new-life-insurance"
  }),
  new Action({
    lump_sum_contribution: 20000,
    debit_order: {
      day: "1",
      amount: 1000
    },
    title: "Open a new Unit Trust",
    fund_name: "Nedgroup Core Accelarated",
    start_month: new Date("2019-07-01"),
    action_type: "new-ut"
  }),
  new Action({
    label: "New medical aid",
    action_type: "new-medical-aid",
    ma_plan_option: "Discovery Coastal Core",
    is_rewards_program: true,
    cover_start_date: new Date("2019-08-16")
  })
];

let counter = 0;

actions.map(action => {
  action.save(err => {
    if (err) console.log("Error: ", err);
    counter++;
    if (counter === actions.length) closeMongoose();
  });
});

const closeMongoose = () => mongoose.disconnect();
