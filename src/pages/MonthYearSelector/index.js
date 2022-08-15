import React, { useState } from 'react'
import propTypes from 'prop-types'
import { View, Modal } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { Button } from 'react-native-elements'
import { MonthList, YearList } from './List'
import Header from './Header'

function MonthSelector({ selected, setSelected, visible, onClose }) {
  const [selectedCopy, setSelectedCopy] = useState(new Date(selected.getTime()))

  return (
    <Modal transparent visible={visible} onClose={onClose}>
      <View
        style={[tw`w-full h-full`, { backgroundColor: colors.lightGrayPurple }]}
      >
        <Header onClose={onClose} />

        <View style={[tw`h-4/5 flex-row justify-evenly items-center`]}>
          <MonthList selected={selectedCopy} setSelected={setSelectedCopy} />
          <YearList selected={selectedCopy} setSelected={setSelectedCopy} />
        </View>

        <View style={tw`items-center`}>
          <Button
            title="Select Date"
            onPress={() => {
              setSelected(selectedCopy)
              onClose()
            }}
            buttonStyle={{
              backgroundColor: colors.primary,
              borderRadius: 5,
              width: '70%',
            }}
            titleStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

MonthSelector.propTypes = {
  selected: propTypes.instanceOf(Date).isRequired,
  setSelected: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  visible: propTypes.bool.isRequired,
}

export default MonthSelector
