import React from 'react'
import { AboutContainer, AboutDescription, ContactContainer, ContactDetails, ContactTitle,Icon } from '../styles/AboutStyles'
import { faPhoneFlip,faEnvelope } from '@fortawesome/free-solid-svg-icons';


function AboutComponent(){
    return <AboutContainer>
        <p>Despre noi</p>
        <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit orci non auctor hendrerit. Vivamus ultricies non orci lobortis sodales. Mauris fringilla sit amet lectus quis dignissim. Vestibulum at pretium justo. Quisque at malesuada lacus. Nam pellentesque justo at diam auctor volutpat.<br/><br/> Cras id bibendum diam, eu ultricies justo. Maecenas in mauris non nunc iaculis eleifend quis et elit. Maecenas sed consectetur augue. Suspendisse imperdiet enim in lobortis gravida. Praesent facilisis lectus sit amet ligula sodales molestie vitae a erat. Morbi et finibus metus. Fusce sodales porttitor arcu id rutrum. Pellentesque at egestas purus. Sed bibendum volutpat risus, et tristique tortor.

        Maecenas ut lacus ornare lorem lobortis aliquet. Quisque in erat ipsum. Integer sodales urna id diam lacinia, nec commodo tortor molestie.<br/><br/> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum, arcu vitae feugiat sagittis, turpis lacus malesuada metus, eu blandit nisi nisl a augue. Suspendisse ultricies ipsum nec tellus viverra, in vehicula est ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel odio nunc. Nullam elementum in massa quis rutrum. Quisque in diam leo. Fusce et ipsum eleifend, porttitor urna eget, venenatis nisi. In hac habitasse platea dictumst. Aenean efficitur mattis erat, a faucibus tortor condimentum ut.

        Sed in erat dolor. Donec sed lectus semper, ultrices velit sed, viverra ligula.<br/><br/> Duis vehicula erat id erat ultricies, nec ultrices ligula auctor. Etiam malesuada vitae elit ut interdum. Proin at placerat risus. Morbi commodo elementum nisi at mattis. Aliquam at sodales urna. Aenean egestas lacus felis, et egestas libero ultrices id.

        Aliquam pulvinar tellus dignissim tortor semper, sagittis bibendum magna pharetra. Vestibulum sapien mauris, malesuada sed mauris non, pulvinar dapibus felis.<br/><br/> Aenean semper nunc id nibh consequat, vitae ultrices eros tincidunt. Vivamus a ante quis tellus consequat ornare. Vivamus varius risus at dui varius fringilla. Ut at purus pellentesque, consectetur ante a, egestas mi. Quisque nec commodo nisi, eget tempor lacus. Aliquam pulvinar est a magna gravida fringilla. Curabitur vitae pulvinar ipsum, a vehicula odio. Nunc sagittis enim dolor, eget fringilla felis fermentum at.<br/><br/>

        Aliquam bibendum facilisis feugiat. Phasellus ullamcorper maximus lectus quis tincidunt. Suspendisse ultricies nibh nibh, at hendrerit est sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis placerat nisl ac tempus. Sed posuere, turpis at varius porttitor, ipsum urna laoreet lacus, ut bibendum libero urna at massa. Cras nibh est, hendrerit at tincidunt id, commodo in purus. Suspendisse in ipsum libero.
        </AboutDescription>
        <ContactContainer>
            <ContactTitle>Contact</ContactTitle>
            <ContactDetails>
                <Icon icon={faPhoneFlip}></Icon>
                <p>+1234 123 123</p>
            </ContactDetails>
            <ContactDetails>
                <Icon icon={faEnvelope}></Icon>
                <p>info@loremipsum.ro</p>
            </ContactDetails>
        </ContactContainer>
    </AboutContainer>
}

export default AboutComponent;