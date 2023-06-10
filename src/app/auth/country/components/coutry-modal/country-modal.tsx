import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ICONS} from '../../../../../config/constants/icons';
import {Country} from './interfaces';
import Modal from 'react-native-modal';
import {COLORS} from '../../../../../config/constants/colors';
import {widthPercentageToDP} from '../../../../../utils/dimensions';
import {Spacer} from '../../../../../components';
import {styles} from './styles';
import { orderBy } from 'lodash';
interface CountryModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCountrySelect: (country: Country) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({
  isVisible,
  onClose,
  onCountrySelect,
}) => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch the list of countries from an API or a data source
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data: Country[] = await response.json();
        const sortedData = orderBy(data, [(item) => item.name.common]);
        setCountries(sortedData);
        setFilteredCountries(sortedData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    onClose();
  };
  const handleSearchTextChange = (text: string) => {
    setSearchText(text);

    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredCountries(filtered);
  };
  const renderItem = ({item}: {item: Country}) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => handleCountrySelect(item)}>
      <Text style={styles.flag}>{item?.flag}</Text>
      <Text style={styles.countryName}>{item?.name?.common}</Text>
    </Pressable>
  );

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.8}
      onBackdropPress={onClose}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      animationInTiming={500}
      animationOutTiming={500}
      avoidKeyboard
      backdropColor={COLORS.black}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      coverScreen
      useNativeDriverForBackdrop
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}
      hasBackdrop
      statusBarTranslucent
      hideModalContentWhileAnimating
      useNativeDriver>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={ICONS.search} style={styles.searchIcon} />
            <Spacer width={widthPercentageToDP(1)} />
            <TextInput
              style={styles.searchInput}
              placeholder="Recherche"
              placeholderTextColor={COLORS.black4}
              value={searchText}
              onChangeText={handleSearchTextChange}
            />
          </View>
          <FlatList
            data={filteredCountries}
            renderItem={renderItem}
            keyExtractor={item => item.name.common}
            style={styles.list}
          />
          <Pressable onPress={onClose}>
            <Text style={styles.cancel}>Annuler</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default CountryModal;
