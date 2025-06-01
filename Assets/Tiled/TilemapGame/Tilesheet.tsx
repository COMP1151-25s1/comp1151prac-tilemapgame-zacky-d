<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="TinyDungeon_Tilesheet" tilewidth="16" tileheight="16" tilecount="132" columns="12">
 <properties>
  <property name="unity:IsTrigger" value="true"/>
  <property name="unity:layer" value="Hazard"/>
 </properties>
 <image source="../tinydungeon/Tilemap/tilemap_packed.png" width="192" height="176"/>
 <tile id="1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="10.1818" y="9.09091" width="5.81818" height="6.90909"/>
  </objectgroup>
 </tile>
 <tile id="2">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="8" width="16" height="8"/>
  </objectgroup>
 </tile>
 <tile id="3">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="8.72727" width="5.81818" height="7.27273"/>
  </objectgroup>
 </tile>
 <tile id="13">
  <objectgroup draworder="index" id="2">
   <object id="1" x="10.1818" y="0" width="5.81818" height="16"/>
  </objectgroup>
 </tile>
 <tile id="15">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="6.18182" height="16"/>
  </objectgroup>
 </tile>
 <tile id="25">
  <objectgroup draworder="index" id="2">
   <object id="1" x="9.63636" y="0" width="6.36364" height="8.90909"/>
  </objectgroup>
 </tile>
 <tile id="26">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="9.27273"/>
  </objectgroup>
 </tile>
 <tile id="27">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="6.18182" height="8.90909"/>
  </objectgroup>
 </tile>
 <tile id="61">
  <properties>
   <property name="unity:IsTrigger" value="true"/>
   <property name="unity:layer" value="Hazard"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="1" width="14" height="14"/>
   <object id="2" x="1" y="1" width="14" height="14">
    <properties>
     <property name="unity:IsTrigger" value="true"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
   <object id="3" x="1" y="1" width="14" height="14"/>
  </objectgroup>
 </tile>
</tileset>
