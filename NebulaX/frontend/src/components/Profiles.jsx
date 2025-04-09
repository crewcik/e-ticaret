import { useState } from 'react';
import { Button } from 'reactstrap';

const Profiles = () => {
    const [profiles, setProfiles] = useState(
        { id: 1, name: 'Crew', first_name: 'Yiğit', last_name: 'Crew', phone: '0123 456 78 90', email: 'crewdevcik@gmail.com', role: 'Admin', status: 'Aktif', createAt: Date.now(), img: 'https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg' },
    );

    const profileContainerStyle = {
        maxWidth: '500px',
        margin: '30px auto',
        padding: '30px',
        backgroundColor: '#2e3a47',
        borderRadius: '12px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        border: '1px solid #ddd',
        color: '#fff',
    };

    const profileImageStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: '3px solid #2a7ccf',
    };

    const profileInfoStyle = {
        marginBottom: '15px',
        fontSize: '16px',
        color: '#eaeaea',
    };

    const profileInfoStrongStyle = {
        color: '#fff',
        fontWeight: 'bold',
    };

    const statusStyle = {
        marginTop: '12px',
        padding: '8px 20px',
        borderRadius: '20px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '14px',
        letterSpacing: '1px',
    };

    const activeStatusStyle = {
        ...statusStyle,
        backgroundColor: '#4CAF50',
    };

    const inactiveStatusStyle = {
        ...statusStyle,
        backgroundColor: '#FF6347',
    };

    const profileDateStyle = {
        fontSize: '14px',
        color: '#b0b0b0',
        marginTop: '10px',
    };

    const buttonStyle = {
        width: '48%',
        borderRadius: '20px',
        marginBottom: '10px',
    };

    return (
        <div style={profileContainerStyle}>
            <img 
                src={profiles.img || 'Hata'} 
                alt="Yüklenmedi." 
                style={profileImageStyle}
            />
            
            <div style={profileInfoStyle}>
                <span style={profiles.status === 'Aktif' ? activeStatusStyle : inactiveStatusStyle}>
                    {profiles.status || 'Hata'}
                </span>
            </div>

            <div style={profileInfoStyle}>
                <strong style={profileInfoStrongStyle}>Kullanıcı Adı:</strong> {profiles.name || 'Hata'}
            </div>
            <div style={profileInfoStyle}>
                <strong style={profileInfoStrongStyle}>Adı Soyadı:</strong> {profiles.first_name || 'Hata'} {profiles.last_name || 'Hata'}
            </div>
            <div style={profileInfoStyle}>
                <strong style={profileInfoStrongStyle}>E-mail:</strong> {profiles.email || 'Hata'}
            </div>
            <div style={profileInfoStyle}>
                <strong style={profileInfoStrongStyle}>Telefon No:</strong> {profiles.phone || 'Hata'}
            </div>
            <div style={profileInfoStyle}>
                <strong style={profileInfoStrongStyle}>Üyelik:</strong> {profiles.role || 'Hata'}
            </div>
            <div style={profileDateStyle}>
                <strong style={profileInfoStrongStyle}>Katılma Tarihi:</strong> {new Date(profiles.createAt).toLocaleDateString()}
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Button outline color='warning' style={buttonStyle}>Kullanıcı Ayarları</Button>
                <Button outline color='info' style={buttonStyle}>Siparişlerim</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button outline color='success' style={buttonStyle}>Destek Taleplerim</Button>
                <Button color='danger' style={buttonStyle}>Çıkış Yap</Button>
            </div>
        </div>
    );
}

export default Profiles;
