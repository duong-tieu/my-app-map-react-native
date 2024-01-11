import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import apartments from "~/../../assets/data/apartments.json";
import CustomerMarked from "./CustomerMarked";
import ApartmentListItem from "./ApartmentListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MapViewComponent({}) {
  const [selectorApartmant, setSelectorApartment] = useState(null);
  const [region, setRegion] = useState({
    latitude: 11.73368,
    longitude: 106.87478,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);


  return (
      <View style={styles.container}>
        <GestureHandlerRootView>
          <MapView
            style={styles.map}
            initialRegion={region}
            region={region}
            showsUserLocation={true}
          >
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>Current Location</Text>
              </View>
            </Marker>

            {apartments.map((apartment) => (
              <CustomerMarked
                key={apartment.id}
                apartment={apartment}
                onPress={() => setSelectorApartment(apartment)}
              />
            ))}

            {selectorApartmant && (
              <View>
                <ApartmentListItem
                  apartment={selectorApartmant}
                  containerStyle={{
                    position: "relative",
                    bottom:
                      typeof snapPoints[0] == "number"
                        ? snapPoints[0] + 10
                        : 100,
                    left: 10,
                    right: 10,
                  }}
                />
              </View>
            )}

            {selectorApartmant && (
              <>
                <Polyline
                  coordinates={[
                    { latitude: region.latitude, longitude: region.longitude },
                    {
                      latitude: selectorApartmant.latitude,
                      longitude: selectorApartmant.longitude,
                    },
                  ]}
                  strokeColor="#FF0000"
                  strokeWidth={3}
                />
                <Marker
                  coordinate={{
                    latitude: selectorApartmant.latitude,
                    longitude: selectorApartmant.longitude,
                  }}
                ></Marker>
              </>
            )}
          </MapView>
        </GestureHandlerRootView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("screen").width * 1,
    height: Dimensions.get("screen").height * 1,
  },
  listApartment: {
    fontSize: 24,
    textAlign: "center",
    color: "#3a3a3a",
    fontWeight: "bold",
    marginVertical: 5,
  },
  marker: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: "white",
    fontWeight: "bold",
  },
});
