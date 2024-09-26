import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface BulletPointProps {
  text: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text }) => {
  const firstSpaceIndex = text.indexOf(" ");
  const firstWord =
    firstSpaceIndex === -1 ? text : text.substring(0, firstSpaceIndex);
  const restOfText =
    firstSpaceIndex === -1 ? "" : text.substring(firstSpaceIndex);

  return (
    <Text style={styles.bulletPoint}>
      • <Text style={styles.bold}>{firstWord}</Text>
      {restOfText}
    </Text>
  );
};

export default function TermsAndConditions() {
  const navigation = useNavigation();
  const handleAccept = () => {
    navigation.navigate("Dashboard" as never);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.lastUpdatedText}>Last updated: January 2024</Text>
        <Text style={styles.lastUpdatedText}>
          Please read these terms and conditions carefully before using Our
          Service
        </Text>

        <Text style={styles.heading}>Interpretation and Definitions</Text>
        <Text style={styles.subheading}>Interpretation</Text>
        <Text>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Text>
        <Text style={styles.subheading}>Definitions</Text>
        <Text style={styles.lastUpdatedText}>
          For the purposes of these Terms and Conditions:
        </Text>
        <View style={styles.bulletContainer}>
          <BulletPoint text="Application means the software program provided by the Company downloaded by you on any electronic device, named Parking Services Limited " />
          <BulletPoint text="Application-Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc, (Google Play Store) in which the Application has been downloaded." />
          <BulletPoint text="Affiliate means an entity that controls, is controlled by or is under common control with a party, where 'control' means ownership of 50% or more of the sahres, equity intrest or other securities entitled to vote for election of directors or other managing authority " />
          <BulletPoint text="Company (referred to as either 'the company', 'We', 'Us' or 'Our' in this Agreement) refers to Parking Services Ltd, New Zealand, www.parkingservices.co.nz" />
          <BulletPoint text="Content referes to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available bu You, regardless of the form of that content." />
          <BulletPoint text="Device means any device that can be access the Service such as computer, a cellphone or a digital tablet" />
          <BulletPoint text="Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance of features of our Service. Survice refers to the Application" />
          


        </View>
      </ScrollView>
      <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
  },
  acceptButton: {
    backgroundColor: "#004EDB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  lastUpdatedText: {
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 25,
    fontWeight: "300",
    lineHeight: 60,
  },
  bulletContainer: {
    marginTop: 10,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    marginLeft: 25,
  },
  bold: {
    fontWeight: "bold",
  },
});
