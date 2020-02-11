const mongoose = require('mongoose')
const { Schema } = mongoose

const ActionSchema = new Schema(
  {
    total_premium: { type: Number },
    fund_name: { type: String },
    start_month: { type: Date },
    lump_sum_contribution: { type: Number },
    debit_order: { day: { type: String }, amount: { type: Number } },
    disability_cover: { type: Number },
    disability_premium: { type: Number },
    cover_start_date: { type: Date },
    income_protection_premium: { type: Number },
    income_protection_cover: { type: Number },
    critical_illness_cover: { type: Number },
    critical_illness_premium: { type: Number },
    label: { type: String },
    life_cover: { type: Number },
    life_premium: { type: Number },
    action_type: { type: String },
    ma_plan_option: { type: String },
    is_rewards_program: { type: Boolean }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Action', ActionSchema)
