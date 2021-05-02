import React from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../ui/Input'

const MealItemForm = (props) => {
  return <form className={classes.form}>
    <Input
      label="Amount"
      input={{ type: 'number', id: props.id, min: '1', max: '5', stepValue: '1', defaultValue: '1' }}
    />
    <button>Add + </button>
  </form>
}

export default MealItemForm