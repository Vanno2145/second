import React, { useState } from 'react';

function Reg() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [languageEnglish, setLanguageEnglish] = useState(false);
    const [languageNonEnglish, setLanguageNonEnglish] = useState(false);
    const [about, setAbout] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            userId,
            password,
            name,
            address,
            country,
            zipCode,
            email,
            sex,
            languageEnglish,
            languageNonEnglish,
            about,
        });
        alert('Форма отправлена! Проверьте консоль для данных.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">User id [5 to 7 characters]:</label>
                <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    minLength="5"
                    maxLength="7"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password [7 to 12 characters]:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="7"
                    maxLength="12"
                    required
                />
            </div>
            <div>
                <label htmlFor="name">Name [Alphabates characters]:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Address [alphanumeric characters]:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    pattern="[A-Za-z0-9\s]+"
                    required
                />
            </div>
            <div>
                <label htmlFor="country">Country [Must select a country]:</label>
                <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                >
                    <option value="">Please select a country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Moldova">Moldova</option>

                </select>
            </div>
            <div>
                <label htmlFor="zipCode">ZIP Code [alphanumeric characters]:</label>
                <input
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    pattern="[A-Za-z0-9]+"
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email [Valid email]:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Sex [Select Male or Female]:</label>
                <input
                    type="radio"
                    id="male"
                    name="sex"
                    value="Male"
                    checked={sex === 'Male'}
                    onChange={(e) => setSex(e.target.value)}
                />
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    id="female"
                    name="sex"
                    value="Female"
                    checked={sex === 'Female'}
                    onChange={(e) => setSex(e.target.value)}
                />
                <label htmlFor="female">Female</label>
            </div>
            <div>
                <label>Language [Optional]:</label>
                <input
                    type="checkbox"
                    id="english"
                    checked={languageEnglish}
                    onChange={(e) => setLanguageEnglish(e.target.checked)}
                />
                <label htmlFor="english">English</label>
                <input
                    type="checkbox"
                    id="nonEnglish"
                    checked={languageNonEnglish}
                    onChange={(e) => setLanguageNonEnglish(e.target.checked)}
                />
                <label htmlFor="nonEnglish">Non English</label>
            </div>
            <div>
                <label htmlFor="about">About (Optional):</label>
                <textarea
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Reg;