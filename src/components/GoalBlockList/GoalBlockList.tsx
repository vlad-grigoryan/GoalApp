import {
  NativeSyntheticEvent,
  ScrollView,
  TextInputScrollEventData,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {GoalBlock} from '../../interfaces';
import GoalItem from '../GoaItem';
import {centralizedWidth, deviceWidth, goalItemWidth} from '../../utils';

interface Props {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  openEditFormModal: (goalItem: GoalBlock, index: number) => void;
  scrollRef: any;
  goalBlocks: GoalBlock[];
}
const GoalBlockList = ({
  setCurrentIndex,
  currentIndex,
  openEditFormModal,
  scrollRef,
  goalBlocks,
}: Props) => {
  const handleScrollGoalBlock = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputScrollEventData>) => {
    const newCurrentIndexGoal = Math.floor(
      (nativeEvent.contentOffset.x + deviceWidth / 2 - centralizedWidth) /
        goalItemWidth,
    );
    if (newCurrentIndexGoal !== currentIndex) {
      setCurrentIndex(newCurrentIndexGoal);
    }
  };
  return (
    <View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        onScroll={handleScrollGoalBlock}
        ref={scrollRef}>
        <View style={styles.goalItems}>
          {goalBlocks.map((goalItem: GoalBlock, index: number) => (
            <TouchableHighlight
              key={goalItem.id}
              underlayColor={'transparent'}
              onPress={() => openEditFormModal(goalItem, index)}>
              <GoalItem {...goalItem} key={index} />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GoalBlockList;
