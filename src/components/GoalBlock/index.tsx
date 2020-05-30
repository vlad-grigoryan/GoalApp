import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Background from './../Background';
import styles from './styles';
import {backgrounds} from '../../initialData';
import {formatDate} from '../../utils';
import {GoalBlockInterface} from '../../interfaces';

const GoalBlock = ({
  title,
  deadline,
  current,
  goal,
  bgIndex,
}: GoalBlockInterface) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.item}>
        <Background {...backgrounds[bgIndex]} />
        <View style={styles.deadline}>
          <Icon name="piggy-bank" style={styles.deadlineIcon} />
          <Text style={styles.deadlineText}>until {formatDate(deadline)}</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.progress}>
          <AnimatedCircularProgress
            size={108}
            width={12}
            fill={goal ? (current / goal) * 100 : 0}
            rotation={0}
            lineCap="round"
            tintColor="white"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="rgba(255, 255, 255, 0.3)">
            {(fill) => (
              <Text style={styles.progressCircleText}>
                {parseFloat((fill || 0).toFixed(2))}%
              </Text>
            )}
          </AnimatedCircularProgress>
          <View style={styles.progressFinances}>
            <Text style={styles.progressFinancesCurrent}>${current}</Text>
            <Text style={styles.progressFinancesGoal}>of ${goal}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GoalBlock;
