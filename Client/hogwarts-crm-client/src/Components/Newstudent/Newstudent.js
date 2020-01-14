import React from 'react'

export default function Newstudent() {
    return (
        <div>
            <h1>New Student</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="firstname" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastname"  />
                </label>
                <label for="existing_magic_skillz" >Existing magic skills</label>
                <select name="existing_magic_skillz">
                    <option value="Alchemy">Alchemy</option>
                    <option value="Animation">Animation</option>
                    <option value="Conjuror">Conjuror</option>
                    <option value="Disintegration">Disintegration</option>
                    <option value="Elemental">Elemental</option>
                    <option value="Healing">Healing</option>
                    <option value="Illusion">Illusion</option>
                    <option value="Immortality">Immortality</option>
                    <option value="Invisibility">Invisibility</option>
                    <option value="Invulnerability">Invulnerability</option>
                    <option value="Necromancer">Necromancer</option>
                    <option value="Omnipresent">Omnipresent</option>
                    <option value="Omniscient">Omniscient</option>
                    <option value="Poison">Poison</option>
                    <option value="Possession">Possession</option>
                    <option value="Self-detonation">Self-detonation</option>
                    <option value="Summoning">Summoning</option>
                    <option value="Water breathing">Water breathing</option>
                </select>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label for="desired_magic_skillz" >Desired magic skills</label>
                <select name="desired_magic_skillz">
                    <option value="Alchemy">Alchemy</option>
                    <option value="Animation">Animation</option>
                    <option value="Conjuror">Conjuror</option>
                    <option value="Disintegration">Disintegration</option>
                    <option value="Elemental">Elemental</option>
                    <option value="Healing">Healing</option>
                    <option value="Illusion">Illusion</option>
                    <option value="Immortality">Immortality</option>
                    <option value="Invisibility">Invisibility</option>
                    <option value="Invulnerability">Invulnerability</option>
                    <option value="Necromancer">Necromancer</option>
                    <option value="Omnipresent">Omnipresent</option>
                    <option value="Omniscient">Omniscient</option>
                    <option value="Poison">Poison</option>
                    <option value="Possession">Possession</option>
                    <option value="Self-detonation">Self-detonation</option>
                    <option value="Summoning">Summoning</option>
                    <option value="Water breathing">Water breathing</option>
                </select>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label for="intrested_in_course" >intrested in course</label>
                <select name="intrested_in_course">
                    <option value="Alchemy basics">Alchemy basics</option>
                    <option value="Alchemy advanced">Alchemy advanced</option>
                    <option value="Magic for day-to-day life">Magic for day-to-day life</option>
                    <option value="Magic for medical professionals">Magic for medical professionals</option>
                    <option value="Dating with magic">Dating with magic</option>
                </select>
                <button type= "submit">Send new student</button>
            </form>
        </div>
    )
}
