import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TicTacToeIcons from '../components/TicTacToeIcons';
import Snackbar from 'react-native-snackbar';

type stateType = 'circle' | 'cross' | 'empty';

export default function Project7() {
  const [gameState, setGameState] = useState<stateType[]>(
    new Array(9).fill('empty' as stateType),
  );
  const [winner, setWinner] = useState<stateType>('empty' as stateType);
  const [isCross, setIsCross] = useState<boolean>(false);

  const checkWinner = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2]
    )
      setWinner(gameState[0]);
    else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    )
      setWinner(gameState[3]);
    else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    )
      setWinner(gameState[6]);
    else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    )
      setWinner(gameState[0]);
    else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    )
      setWinner(gameState[1]);
    else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    )
      setWinner(gameState[2]);
    else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    )
      setWinner(gameState[0]);
    else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    )
      setWinner(gameState[2]);
  };

  const changeItem = (position: number) => {
    if (winner !== 'empty') {
      return Snackbar.show({
        text: 'Game is already over',
        backgroundColor: '#000000',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'Restart the game',
          textColor: 'green',
          onPress: restartGame,
        },
      });
    }

    if (gameState[position] !== 'empty') {
      return Snackbar.show({
        text: 'Position already taken, please choose another slot',
        backgroundColor: '#000000',
        duration: Snackbar.LENGTH_SHORT,
      });
    }

    const newGameState = gameState.map((item, index) => {
      if (index === position) {
        return isCross ? 'cross' : 'circle';
      }
      return item;
    });

    setGameState(newGameState);
    setIsCross(prev => !prev);
  };

  const restartGame = () => {
    setGameState(new Array(9).fill('empty' as stateType));
    setIsCross(false);
    setWinner('empty' as stateType);
  };

  const renderItems = ({item, index}: {item: stateType; index: number}) => (
    <View style={styles.gamePad}>
      <Pressable onPress={() => changeItem(index)}>
        <TicTacToeIcons name={item} />
      </Pressable>
    </View>
  );

  useEffect(() => {
    checkWinner();
  }, [gameState]);

  return (
    <SafeAreaView>
      <View style={styles.gameIndicatorContainer}>
        {winner !== 'empty' ? (
          <Text style={styles.gameIndicator}>
            Player {winner === 'circle' ? 1 : 2} won the game 🎊
          </Text>
        ) : (
          <Text style={styles.gameIndicator}>
            Player {isCross ? 2 : 1}'s turn 🎮
          </Text>
        )}
      </View>

      <FlatList data={gameState} renderItem={renderItems} numColumns={3} />

      <View style={styles.restartButton}>
        <Pressable onPress={restartGame}>
          <Text style={{color: 'white', fontSize: 17}}>Start new game</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gamePad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  gameIndicatorContainer: {
    backgroundColor: '#08fc30',
    marginHorizontal: 30,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  gameIndicator: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  restartButton: {
    backgroundColor: '#6e08fc',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
