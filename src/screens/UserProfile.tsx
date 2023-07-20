import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface UserDetails {
  fullName: string;
  email: string;
  profilePicture: string;
}
const UserProfile = ({ navigation }: any) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const handleLogout = async () => {
    try {
      Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              // Redirect back to the Login screen
              navigation.navigate("WelcomeScreen");
            },
          },
        ],
        { cancelable: false }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      Alert.alert(
        "Are you sure you want to delete your account?",
        "This action is irreversible!!",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              // Show a success message or navigate to the login screen
              Alert.alert(
                "Account Deleted",
                "Your account has been deleted successfully."
              );

              navigation.navigate("WelcomeScreen");
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {}
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingTop: 20, marginLeft: 20 }}
      >
        <MaterialIcons name="arrow-back-ios" size={30} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/user-profile.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <Text style={styles.username}>{userDetails?.fullName}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <TouchableOpacity style={styles.infoItem}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>John Doe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>example@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoItem}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>+232 00 000000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shipping Address</Text>
            <TouchableOpacity style={styles.infoItem}>
              <Text style={styles.infoLabel}>Address:</Text>
              <Text style={styles.infoValue}>Kissy, Freetown</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoItem}>
              <Text style={styles.infoLabel}>Country:</Text>
              <Text style={styles.infoValue}>Siera Leone</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteAccountButton}
            onPress={handleDeleteAccount}
          >
            <Text style={styles.logoutButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 20,
  },
  changePictureButton: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  defaultIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    backgroundColor: "silver",
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    flex: 1,
    fontSize: 14,
  },
  infoValue: {
    flex: 2,
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  deleteAccountButton: {
    marginTop: 25,
    backgroundColor: "#ff0000",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserProfile;
