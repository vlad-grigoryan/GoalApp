import {
  NativeSyntheticEvent,
  ScrollView,
  TextInputScrollEventData,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {GoalBlockInterface} from '../../interfaces';
import GoalBlock from '../GoalBlock';
import {centralizedWidth, deviceWidth, goalItemWidth} from '../../utils';

interface Props {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  openEditFormModal: (goalItem: GoalBlockInterface, index: number) => void;
  scrollRef: any;
  goalBlocks: GoalBlockInterface[];
  showModal: boolean;
}
const GoalBlockList = ({
  setCurrentIndex,
  currentIndex,
  openEditFormModal,
  scrollRef,
  goalBlocks,
  showModal,
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
          {goalBlocks.map((goalItem: GoalBlockInterface, index: number) => (
            <TouchableHighlight
              key={index}
              underlayColor={'transparent'}
              onPress={() => openEditFormModal(goalItem, index)}>
              <GoalBlock {...goalItem} key={index} showModal={showModal} />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GoalBlockList;
