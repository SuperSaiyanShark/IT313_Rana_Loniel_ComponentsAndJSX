import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import StudentCard from './StudentCard';

const initialStudents = [
    {id:"s1", name: "Ana Cruz", course: "IT313", units:21, isFullLoad: true},
    {id:"s2", name: "Bea Santos", course: "IT313", units:15, isFullLoad: false},
    {id:"s3", name: "Cid Ramos", course: "IT313", units:21, isFullLoad: true},
    {id:"s4", name: "Dex Alonzo", course: "IT313", units:12, isFullLoad: false},

];

export default function StudentRoster(){
    const [students, setStudents] = useState(initialStudents);
    const [useIndexKey, setUseIndexKey] = useState(false);

    const handleReverse = ()=>{
        setStudents([...students].reverse());
    };
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>IT313 Class Roster</Text>
                <Text style={styles.headerSubtitle}>
                {`${students.length} students enrolled`}
                </Text>
                <Text style={styles.keyModeText}>
                Key mode: {useIndexKey ? "Array Index (Unstable)" : "student.id (Stable)"}
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Reverse Roster Order" onPress={handleReverse} color="#007AFF" />
                <View style={{ height: 8 }} />
                <Button 
                title={useIndexKey ? "Switch to ID Key" : "Switch to Index Key (Test)"} 
                onPress={() => setUseIndexKey(!useIndexKey)} 
                color={useIndexKey ? "#D32F2F" : "#6C757D"} 
                />
            </View>

            <View style={styles.listContainer}>
                {students.map((student, index) => (
                <StudentCard
                    key={useIndexKey ? index : student.id}
                    name={student.name}
                    course={student.course}
                    units={student.units}
                    isFullLoad={student.isFullLoad}
                />
                ))}
            </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F6FA',
    flexGrow: 1,
  },
  headerContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#4A5568',
    fontWeight: '600',
  },
  keyModeText: {
    fontSize: 12,
    color: '#E53E3E',
    marginTop: 4,
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  listContainer: {
    width: '100%',
  },
});
