import React from 'react'
import TextInput from './TextInput'
function DialogInput() {
  return (
   <>
            <TextInput
            label="Pick Up Location"
            value={PickupLocation.value}
            returnKeyType="next"
            onChangeText={(text) => setPickup(text)}
        />
        <TextInput
            label="Drop off Location"
            value={Dropoff.value}
            returnKeyType="next"
            onChangeText={(text) => setDropoff(text)}
        />
        <TextInput
            label="Customer Phone Number"
            value={CustomerNum.value}
            returnKeyType="next"
            onChangeText={(text) => setCustomerNum(text)}
        />
        <TextInput
            label="Length"
            value={Length.value}
            returnKeyType="next"
            onChangeText={(text) => setLength(parseInt(text))}
        />
        <TextInput
            label="Width"
            value={Width.value}
            returnKeyType="next"
            onChangeText={(text) => setWidth(parseInt(text))}
        />
        <TextInput
            label="Price"
            value={Price.value}
            returnKeyType="next"
            onChangeText={(text) => setPrice(parseInt(text))}
        />
        <TextInput
            label="Delivery Charge"
            value={DeliveryCharge.value}
            returnKeyType="next"
            onChangeText={(text) => setDeliveryCharge(parseInt(text))}
        />
    </> 
  )
}

export default DialogInput