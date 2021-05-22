import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {Container, Content, Text, Body, Header} from 'native-base';
import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';

const App = () => {
  const {t, i18n} = useTranslation();
  const options = [
    {label: 'English', value: 'english'},
    {label: 'French', value: 'french'},
    {label: 'Dutch', value: 'dutch'},
  ];
  return (
    <>
      {/* <StatusBar /> */}
      <Container>
        <Header style={{backgroundColor: 'white'}}>
          <Body>
            <SwitchSelector
              options={options}
              initial={0}
              hasPadding={true}
              backgroundColor="white"
              onPress={language => {
                i18n.changeLanguage(language);
              }}
              textStyle={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
              selectedTextStyle={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
              buttonColor="black"
            />
          </Body>
        </Header>
        <Content
          padder
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
            {t('welcome')}
          </Text>
        </Content>
      </Container>
    </>
  );
};

export default App;
