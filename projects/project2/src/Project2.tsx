import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from '../components/project2/FlatCards';
import ElevatedCard from '../components/project2/ElevatedCard';
import FancyCard from '../components/project2/FancyCard';
import ActionCard from '../components/project2/ActionCard';
import ContactList from '../components/project2/ContactList';

export default class Project2 extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{paddingHorizontal: 10, margin: 10}}>
          <FlatCards />
          <ElevatedCard />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
