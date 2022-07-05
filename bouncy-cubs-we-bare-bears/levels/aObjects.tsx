<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.4" name="aObjects" tilewidth="128" tileheight="192" tilecount="19" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0" type="door">
  <properties>
   <property name="doorgroup" type="int" value="0"/>
  </properties>
  <image width="64" height="128" source="tiledobjects/switchdoor.png"/>
 </tile>
 <tile id="1" type="oneside">
  <image width="64" height="128" source="tiledobjects/oneside.png"/>
 </tile>
 <tile id="2" type="button">
  <properties>
   <property name="doorgroup" type="int" value="0"/>
  </properties>
  <image width="64" height="64" source="tiledobjects/button.png"/>
 </tile>
 <tile id="3" type="bouncer">
  <image width="64" height="64" source="tiledobjects/bouncer.png"/>
 </tile>
 <tile id="4" type="conveyorbelt">
  <properties>
   <property name="size" type="int" value="2"/>
  </properties>
  <image width="128" height="64" source="tiledobjects/conveyorbelt.png"/>
 </tile>
 <tile id="5" type="grizzly">
  <image width="64" height="80" source="tiledobjects/beargrizzly.png"/>
 </tile>
 <tile id="6" type="panda">
  <image width="64" height="80" source="tiledobjects/bearpanda.png"/>
 </tile>
 <tile id="7" type="ice">
  <image width="64" height="80" source="tiledobjects/bearice.png"/>
 </tile>
 <tile id="9" type="camera">
  <image width="64" height="64" source="tiledobjects/camera.png"/>
 </tile>
 <tile id="10" type="goal">
  <image width="128" height="128" source="tiledobjects/goal.png"/>
 </tile>
 <tile id="13" type="wallbouncer">
  <properties>
   <property name="size" type="int" value="3"/>
  </properties>
  <image width="64" height="192" source="tiledobjects/wallBouncerBottom3.png"/>
 </tile>
 <tile id="14" type="wallbouncer">
  <properties>
   <property name="size" type="int" value="2"/>
  </properties>
  <image width="64" height="128" source="tiledobjects/wallBouncerBottom2.png"/>
 </tile>
 <tile id="15" type="timeddoor">
  <properties>
   <property name="delay" type="float" value="0"/>
   <property name="direction" value="up"/>
   <property name="isup" type="bool" value="true"/>
   <property name="timedown" type="float" value="3"/>
   <property name="timeup" type="float" value="3"/>
  </properties>
  <image width="64" height="80" source="tiledobjects/doorTimedH.png"/>
 </tile>
 <tile id="17" type="timeddoor">
  <properties>
   <property name="delay" type="float" value="0"/>
   <property name="direction" value="left"/>
   <property name="isup" type="bool" value="true"/>
   <property name="timedown" type="float" value="3"/>
   <property name="timeup" type="float" value="3"/>
  </properties>
  <image width="64" height="80" source="tiledobjects/doorTimedV.png"/>
 </tile>
 <tile id="18" type="splat">
  <properties>
   <property name="angle" type="float" value="0"/>
   <property name="type" value="goo"/>
  </properties>
  <image width="128" height="128" source="tiledobjects/splatGoo.png"/>
 </tile>
 <tile id="19" type="splat">
  <properties>
   <property name="angle" type="float" value="0"/>
   <property name="type" value="oil"/>
  </properties>
  <image width="128" height="128" source="tiledobjects/splatOil.png"/>
 </tile>
 <tile id="20" type="inflatable">
  <image width="64" height="80" source="tiledobjects/inflatable-lone.png"/>
 </tile>
 <tile id="21" type="hole">
  <image width="64" height="64" source="tiledobjects/hole.png"/>
 </tile>
 <tile id="23" type="teleport">
  <properties>
   <property name="exitid" type="int" value="0"/>
   <property name="teleid" type="int" value="0"/>
  </properties>
  <image width="64" height="128" source="tiledobjects/teleport.png"/>
 </tile>
</tileset>
