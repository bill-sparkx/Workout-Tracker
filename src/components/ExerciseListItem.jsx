import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function ExerciseListItem({item}) {
    return(
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.excerciseContainer}>
        <Text style={styles.exerciseName}>
          {item.name}
        </Text>
        <Text style={styles.exerciseSubtitle}>
          {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
        </Text>
      </Pressable>
    </Link>
    );
  }

  const styles = StyleSheet.create({
    excerciseContainer:{
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10, 
      gap: 5,
      marginHorizontal: 3,
// shadow
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
  
    },
   
    exerciseName: {
      fontSize: 20,
      fontWeight: '500',
    },
    exerciseSubtitle:{
      color: 'dimgray',
      
    },
  });
  