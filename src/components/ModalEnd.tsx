import React, { useEffect, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';

export const ModalEnd = () => {

  const [modal, setModal] = useState(true)

  return (
    <Modal
      transparent={true}
      visible={modal}
    >
      <View style={{ backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <View style={{ backgroundColor: 'orange', width: 300, height: 100, borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>Game Over {console.log('Game Over')}</Text>
          <Button
            title='Restar Game'
            onPress={() => setModal(false)}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ModalEnd;